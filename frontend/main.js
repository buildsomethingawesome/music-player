/** @jsx React.DOM */

var React = require('react');
var http = require('./http');

var MusicPlayerApp = React.createClass({
  getInitialState: function() {
    return { songs: [] };
  },
  componentWillMount: function() {
    http.get('/api/songs').then(function(songs) {
      this.setState({ songs: songs });
    }.bind(this));
  },
  play: function(song) {
    http.post('/api/play', {songId: song.id});
  },
  render: function() {
    var listItems = [];
    this.state.songs.forEach(function(song, i) {
      listItems.push(<li className="list-group-item" key={i}><button className="btn btn-primary btn-xs pull-left" onClick={this.play.bind(this, song)}>Play</button><b>{song.title}</b> - {song.artist}</li>);
    }, this);
    
    return <div>
      <ul className="list-group">{listItems}</ul>
    </div>;
  }
})

React.renderComponent(
  <MusicPlayerApp/>,
  document.getElementById('root')
);