var express = require('express');
var songs = require('./songs');
var player = require('./player');

var api = express.Router();

api.post('/play', function(request, response) {
  player.play(songs[request.body.songId].filename);
  response.send();
});

api.get('/songs', function(request, response) {
  response.send(songs);
});

module.exports = api;