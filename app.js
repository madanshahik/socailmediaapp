
//load modules
const express = require('express');
const {engine} = require('express-handlebars')
const mongoose = require('mongoose')


// connect to MongoURI eported from external file
const keys = require('./config/keys');

// initialise application
const app = express();

// set up template engine
app.engine('handlebars', engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// set up static files to serve css,js & images
app.use(express.static('public'))

// connect to data base
mongoose.connect(keys.MongoURI).then(()=>{
    console.log('connected to remote database....')
}).catch((err)=>{
console.log(error);
})

// set environment variable for port
const port = process.env.PORT || 3000;

// handle routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});