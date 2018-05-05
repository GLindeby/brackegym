const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const loki = require('lokijs');

// EXPRESS
const port = 3000;
const app = express();

// DATABASE
const user_db = new loki('users.json');
user_db.loadDatabase({}, function(err) {
    if (err) {
      console.log("error : " + err);
    }
    else {
      console.log("database loaded.");
    }
  });

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyparser.json());

// API
app.get('/api/user/:name', function(req, res) {
    var users = user_db.getCollection('users');
    res.send(users.find({name: req.params.name}));
});

app.post('/api/user/:user', function(req, res){
    console.log("POST received user: " + req.params.user);
    var user = JSON.parse(req.params.user);
    var users = user_db.getCollection('users');
    users.insert(user);
    user_db.saveDatabase();
})

// Set to listening
app.listen(port, function(){
    console.log('Server started att port: '+port);
})