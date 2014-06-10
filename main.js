var child_process = require('child_process');

var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var router = express.Router();

router.post('/play', function() {
  child_process.exec('afplay boogie.mp3', function() {
    console.log('Done playing!');
  });
});

var songs = [];

var dir = require('node-dir');
var id3 = require('id3js');

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

dir.paths("/Users/avh4/Music", true, function(err, paths) {
  if (err) throw err;
  paths.forEach(function(path) {
    if (!endsWith(path, ".mp3")) return;
    id3({ file: path, type: id3.OPEN_LOCAL }, function(err, tags) {
      if (err) throw err;
      console.log("Loaded song: " + path);
      songs.push({
        title: tags.title,
        artist: tags.artist,
        album: tags.album,
        year: tags.year
      });
    });      
  });
});

router.get('/songs', function(request, response) {
  response.send(songs);
});

app.use('/api', router);
app.use('/', express.static('public'));

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");

var compiler = webpack({
  entry: './frontend/main.js',
  module: {
      loaders: [
        { test: /\.js$/, loader: 'jsx-loader' }
      ]
    },
  output: { path: '/' }
});

app.use(webpackDevMiddleware(compiler, {}));

app.listen(port);
console.log('Magic happens on port ' + port);
