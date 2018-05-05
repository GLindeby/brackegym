const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const port = 3000;

const app = express();

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyparser.json());

app.listen(port, function(){
    console.log('Server started att port: '+port);
})