var express = require('express');
var songs = require('./songs');
var child_process = require('child_process');

var api = express.Router();

api.post('/play', function(request, response) {
  console.log('Playing ' + songs[request.body.songId].filename);
  child_process.spawn('afplay', [songs[request.body.songId].filename]);
  response.send();
});

api.get('/songs', function(request, response) {
  response.send(songs);
});

module.exports = api;