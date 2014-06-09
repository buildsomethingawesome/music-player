var child_process = require('child_process');

console.log('Running!');
child_process.exec('afplay boogie.mp3', function() {
	console.log('Done playing!');
})