/** @jsx React.DOM */

var React = require('react');
var httpinvoke = require('httpinvoke');

var MusicPlayerApp = React.createClass({
  play: function() {
    httpinvoke('/api/play', 'POST');
  },
  render: function() {
    var songs = [
    { artist: 'Carl Sonny Leyland Trio', title: 'This Is The Blues' },
    { artist: 'Carl Sonny Leyland Trio', title: 'Rat Catcher\'s Blues' },
    { artist: 'Carsie Blanton', title: 'Azelea' },
    { artist: 'Josh Fialkoff', title: 'Is You Is or Is You Ain\'t My Baby' },
    ];
    
    var listItems = [];
    songs.forEach(function(song) {
      listItems.push(<li className="list-group-item"><b>{song.title}</b> - {song.artist}</li>);
    });
    
    return <div>
      <button className="btn btn-primary" onClick={this.play}>Play</button>
      <ul className="list-group">{listItems}</ul>
    </div>;
  }
})

React.renderComponent(
  <MusicPlayerApp/>,
  document.getElementById('root')
);