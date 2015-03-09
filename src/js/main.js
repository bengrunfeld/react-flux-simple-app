/** @jsx React.DOM */
var React = require('react');

// Not ideal to use createFactory, but don't know how to use JSX to solve this
// Posted question at: https://gist.github.com/sebmarkbage/ae327f2eda03bf165261
var App = require('./components/app.js');

React.render(
  <App />,
  document.getElementById('main')
);
