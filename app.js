const express = require('express');
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render)
nunjucks.configure('views', {
    noCache: true
});


app.listen(3000, function () {
    console.log("Listening on port 3000...");
});

app.use("/" , routes); 
