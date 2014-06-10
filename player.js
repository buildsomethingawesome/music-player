var child_process = require('child_process');

exports.play = function(filename) {
  console.log('Playing ' + filename);
  child_process.spawn('afplay', [filename]);
}
