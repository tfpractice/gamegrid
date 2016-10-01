exports.cell = require('./cell');
exports.grid = require('./grid');
exports.Game = require('./Game');
exports.GameGraph = require('./game_graph');
exports.AsyncGrid = require('./async_grid');
exports.player = require('./player');

// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Include the Main Component
// var Parent = require('./Components/Parent')

// This code here allows us to render our main component (in this case "Parent")
ReactDOM.render(

	<p>hello</p>,
	document.getElementById('app')
)