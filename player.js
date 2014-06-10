var child_process = require('child_process');

var currentPlayProcess = undefined;

exports.play = function(filename) {
  if (currentPlayProcess) {
    console.log('Stopping current song');
    currentPlayProcess.kill('SIGTERM');
  }
  
  console.log('Playing ' + filename);
  currentPlayProcess = child_process.spawn('afplay', [filename]);
}
