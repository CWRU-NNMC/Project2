const express = require('express');
const serveStatic = require('serve-static');
const path = require ('path');

const app = express();

app.use(serveStatic(path.join(__dirname, 'dist')));

const PORT = process.env.PORT || 8080;

app.get('/portfolios/:portfolioName', (req, res) => {
    portfolioName = req.params.portfolioName
    console.log(portfolioName)
})

app.listen(PORT);