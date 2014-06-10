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

router.get('/songs', function(request, response) {
  var songs = [
    { artist: 'Carl Sonny Leyland Trio', title: 'This Is The Blues' },
    { artist: 'Carl Sonny Leyland Trio', title: 'Rat Catcher\'s Blues' },
    { artist: 'Carsie Blanton', title: 'Azelea' },
    { artist: 'Josh Fialkoff', title: 'Is You Is or Is You Ain\'t My Baby' },
    { artist: 'Natasha Duchene', title: 'Michael' },
    ];
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
