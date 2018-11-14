const path = require('path');
const express = require('express');
const  { userPageFunction, portfolioPageFunction, checkUserName, checkPortfolioName, addNewUser, addNewPortfolio, addNewProject } = require('./db/dbLib')
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('./dist'))

// ** "GET" routes that are actually written as POST routes because of Vue-reasons


// checks whether a user name is available for use. Returns true if available.
app.post('/api/user/query/:name', (req, res) => {
    checkUserName(req.params.name)
        .then(reply => res.send(reply))
        .catch(err => res.status(500).send(err))
})

// checks whether a portfolio name is available for use. Returns true if available.
app.post('/api/portfolio/query/:name', (req, res) => {
    checkPortfolioName(req.params.name)
        .then(reply => res.send(reply))
        .catch(err => res.status(500).send(err))
})

// returns an object with all relevant information on a user
app.post('/api/user/:name', (req, res) => {
    userPageFunction(req.params.name)
        .then(json => res.status(200).send(json))
        .catch(err => res.status(err.code).send(err.message))
})

// returns an object with all the relevant information on a portfolio
app.post('/api/portfolio/:name', (req, res) => {
    portfolioPageFunction(req.params.name)
        .then(json => res.status(200).send(json))
        .catch(err => res.status(err.code || 500).send(err.message || 'Server Error.'))
})

// ** "POST" routes for adding to the database

// adds a new user to the DB
app.post('/api/manage/user/:name', (req, res) => {
    checkUserName(req.params.name)
    .then(reply => {
        if (!reply) throw new Error('This username is unavailable.')
        return addNewUser(req.body)
    })
    .then(results => res.send(results))
    .catch(err => res.status(500).send(`${err}`))
})

// adds a new portfolio to the DB
app.post('/api/manage/portfolio/:name', (req, res) => {
    checkPortfolioName(req.params.name)
    .then(reply => {
        if (!reply) throw new Error('This Portfolio Name is unavailable.')
        return addNewPortfolio(req.body)
    })
    .then(results => res.send(results))
    .catch(err => res.status(500).send(`${err}`))
})

// adds a new project to the DB
app.post('/api/manage/project/:portfolioname', (req, res) => {
    addNewProject(req.body)
    .then(results => res.send(results))
    .catch(err => res.status(500).send(`${err}`))
})


// ** "PUT" routes for updating the database

// updates existing user info
app.put('/api/manage/user/:name')

// updates existing portfolio info
app.put('/api/manage/portfolio/:name')

// updates existing project info
app.put('/api/manage/project/:id')

// ** "DELETE" routes for deleting from the database

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 8080;
app.listen(PORT);