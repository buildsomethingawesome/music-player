/** @jsx React.DOM */

var React = require('react');
var httpinvoke = require('httpinvoke');

var MusicPlayerApp = React.createClass({
  play: function() {
    httpinvoke('/api/play', 'POST');
  },
  render: function() {
    return <button className="btn btn-primary" onClick={this.play}>Play</button>;
  }
})

React.renderComponent(
  <MusicPlayerApp/>,
  document.getElementById('root')
);