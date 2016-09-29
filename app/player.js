const { Graph, utils, traversals } = require('functional_graph_theory');
const grid = require('./grid');
const cell = require('./cell');
const GameGraph = require('./game_graph');

const { addEdge, removeEdge } = Graph;

const { addNodes } = GameGraph;
const player = (name) => ({
	name,
	graph: GameGraph.spawn(),
	score: 0,
});

const getName = ({ name }) => name;
const getGraph = ({ graph }) => graph;
const score = ({ score }) => score;
const incrementScore = (player) => ++player.score;
const decrementScore = (player) => --player.score;
const claimCells = ({ graph }) => addNodes(graph);

module.exports = player;
module.exports.getName = getName;
module.exports.getGraph = getGraph;
module.exports.score = score;
module.exports.incrementScore = incrementScore;
module.exports.decrementScore = decrementScore;
module.exports.claimCells = claimCells;