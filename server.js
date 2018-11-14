const path = require('path');
const express = require('express');
const  { userPageFunction, portfolioPageFunction, checkUserName, checkPortfolioName, addNewUser, addNewPortfolio } = require('./db/dbLib')
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('./dist'))

// ** "GET" routes that are actually written as POST routes because of Vue-reasons


// This route checks whether a user name is available for use. Returns true if available.
app.post('/api/user/query/:name', (req, res) => {
    checkUserName(req.params.name)
        .then(reply => res.send(reply))
        .catch(err => res.status(500).send(err))
})

// This route checks whether a portfolio name is available for use. Returns true if available.
app.post('/api/portfolio/query/:name', (req, res) => {
    checkPortfolioName(req.params.name)
        .then(reply => res.send(reply))
        .catch(err => res.status(500).send(err))
})

// This route returns an object with all relevant information on a user
app.post('/api/user/:name', (req, res) => {
    userPageFunction(req.params.name)
        .then(json => res.status(200).send(json))
        .catch(err => res.status(err.code).send(err.message))
})

// This route returns an object with all the relevant information on a portfolio
app.post('/api/portfolio/:name', (req, res) => {
    portfolioPageFunction(req.params.name)
        .then(json => res.status(200).send(json))
        .catch(err => res.status(err.code || 500).send(err.message || 'Server Error.'))
})

// ** "POST" routes for adding to the database

// This adds a new user to the DB
app.post('/api/add/user/:name', (req, res) => {
    checkUserName(req.params.name)
    .then(reply => {
        if (!reply) throw new Error('This username is unavailable.')
        return addNewUser(req.body)
    })
    .then(results => res.send(results))
    .catch(err => res.status(500).send(`${err}`))
})

// This adds a new portfolio to the DB
app.post('/api/add/portfolio/:name', (req, res) => {
    checkPortfolioName(req.params.name)
    .then(reply => {
        if (!reply) throw new Error('This Portfolio Name is unavailable.')
        return addNewPortfolio(req.body)
    })
    .then(results => res.send(results))
    .catch(err => res.status(500).send(`${err}`))
})




// ** "PUT" routes for updating the database

// ** "DELETE" routes for deleting from the database

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 8080;
app.listen(PORT);