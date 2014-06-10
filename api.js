var express = require('express');
var songs = require('./songs');
var child_process = require('child_process');

var api = express.Router();

api.post('/play', function() {
  child_process.exec('afplay boogie.mp3', function() {
    console.log('Done playing!');
  });
});

api.get('/songs', function(request, response) {
  response.send(songs);
});

module.exports = api;