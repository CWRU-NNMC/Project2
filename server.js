const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('./dist'))

// userPageFunction = (req) => {
    // return new Promise ((resolve, reject) => {
        // /function to get user  page info from mySQL db
        //using req.params.id 
    // })
// }

// profilePageFunction = (req) => {
    // return new Promise ((resolve, reject) => {
        // /function to get profile  page info from mySQL db
        //using req.params.name 
    // })
// }

////// These two functions could potentially be a single function 
////// using a type parameter or rest syntax for selectors



app.post('/api/user/:id', (req, res) => {
    res.send({'hey you': 'json', 'this is a test': 'testing'});
    // userPageFunction(req).then(json => res.send(json))
})


app.post('/api/portfolio/:name', (req, res) => {
    res.send({'test': 'object', 'for': 'portfolio'})
    // profilePageFunction(req).then(json => res.send(json)
})


app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 8080;
app.listen(PORT);