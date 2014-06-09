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

app.use('/api', router);
app.use('/', express.static('public'));

app.listen(port);
console.log('Magic happens on port ' + port);
