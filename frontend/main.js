/** @jsx React.DOM */

var React = require('react');

var MusicPlayerApp = React.createClass({
  render: function() {
    return <button className="btn btn-primary">Play</button>;
  }
})

React.renderComponent(
  <MusicPlayerApp/>,
  document.getElementById('root')
);