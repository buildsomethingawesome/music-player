var express = require('express');
var bodyParser = require('body-parser')

var app = express();
var port = process.env.PORT || 8080;
var api = require('./api');

app.use(bodyParser());
app.use('/api', api);
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
