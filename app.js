const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const loki = require('lokijs');

// EXPRESS
const port = 3000;
const app = express();

// DATABASE
// user_db
const user_db = new loki('users.json');
user_db.loadDatabase({}, function(err) {
    if (err) {
      console.log("error : " + err);
    }
    else {
      console.log("User database loaded.");
    }
  });
// feed_db
const feed_db = new loki('feed.json');
feed_db.loadDatabase({}, function(err) {
    if (err) {
      console.log("error : " + err);
    }
    else {
      console.log("Feed loaded.");
    }
  });

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyparser.json());

// API
app.get('/api/user/all', function(req, res) {
    res.send(user_db.getCollection('users').data);
});

app.get('/api/user/:name', function(req, res) {
    var users = user_db.getCollection('users');
    res.send(users.find({name: req.params.name}));
});

app.post('/api/user/:user', function(req, res){
    console.log("Adding new user: " + req.params.user);
    var user = JSON.parse(req.params.user);
    var users = user_db.getCollection('users');
    users.insert(user);
    user_db.saveDatabase();
})

app.get('/api/feed/', function(req, res) {
    res.send(feed_db.getCollection('messages').data);
});

app.post('/api/feed/clear', function(req, res){
    console.log("Clearing feed from messages.");
    clearCollection(feed_db, "messages");
})

app.post('/api/feed/:message', function(req, res){
    console.log("Posting new feed message: " + req.params.message);
    var msg = JSON.parse(req.params.message);
    var messages = feed_db.getCollection('messages');
    messages.insert(msg);
    //feed_db.saveDatabase(); Avoid writing feed messages to disk for now
})

// Set to listening
app.listen(port, function(){
    console.log('Server started att port: '+port);
})

// HELP FUNCTIONS
function clearCollection(database, collectionName) {
    database.removeCollection(collectionName);
    database.addCollection(collectionName);
    database.saveDatabase();
 } 