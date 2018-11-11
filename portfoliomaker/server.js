const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(history())
app.use(express.static("./dist"))
// app.use(serveStatic(path.join(__dirname, '/dist/')));


const PORT = process.env.PORT || 8080;

// app.get('/portfolios/:portfolioName', (req, res) => {
//     // function to get portfolio data object from database 
//     req;
// })

app.listen(PORT);