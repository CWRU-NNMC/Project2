const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('./dist'))



app.post('/api/user/:id', (req, res, next) => {
    
    console.log('get')
    res.send({'hey you': 'json'});
    // return new Promise ((resolve, reject) => {
        //function to get user  page info from mySQL db
        //using req.params.id 
    // })
    // res.send()

})

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 8080;
app.listen(PORT);