const express = require('express');
const morgan = require('morgan')('dev');
const config = require('./utils/config.json');

const app = express();

app.use(morgan);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});



app.listen(config.port);