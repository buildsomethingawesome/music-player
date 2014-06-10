var MUSIC_DIR = "/Users/avh4/Music";

var songs = [];

var dir = require('node-dir');
var id3 = require('id3js');

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

dir.paths(MUSIC_DIR, true, function(err, paths) {
  if (err) throw err;
  paths.forEach(function(path) {
    if (!endsWith(path, ".mp3")) return;
    id3({ file: path, type: id3.OPEN_LOCAL }, function(err, tags) {
      if (err) throw err;
      console.log("Loaded song: " + path);
      songs.push({
        id: songs.length,
        title: tags.title,
        artist: tags.artist,
        album: tags.album,
        year: tags.year,
        filename: path
      });
    });      
  });
});

module.exports = songs;