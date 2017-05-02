var React = require('react');
var ReactDOM = require('react-dom');

var ListManager = require('./components/ListManager.jsx')


ReactDOM.render(<ListManager title="Ingredients" headingColor="yellow" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="ToDo" headingColor="green" />, document.getElementById('ToDo'));
ReactDOM.render(<ListManager title="Christmas" headingColor="#b31217" />, document.getElementById('Christmas'));