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
  play: function() {
    http.post('/api/play');
  },
  render: function() {
    var listItems = [];
    this.state.songs.forEach(function(song, i) {
      listItems.push(<li className="list-group-item" key={i}><b>{song.title}</b> - {song.artist}</li>);
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