const { Graph, utils, traversals } = require('functional_graph_theory');
const grid = require('./grid');
const cell = require('./cell');
const GameGraph = require('./game_graph');

const { addEdge, removeEdge } = Graph;

const { addNodes, removeNode } = Graph;
const { transferCells, connectAdjacents } = GameGraph;
const { initEdges, makeGrid, state: gState } = grid;
const player = (name) => ({
	name,
	graph: GameGraph.spawn(),
	score: 0,
});

const getName = ({ name }) => name;
const getGraph = ({ graph }) => graph;
const score = ({ score }) => score;
const claimCells = ({ graph }) => GameGraph.addNodes(graph);

module.exports = player;
module.exports.getName = getName;
module.exports.getGraph = getGraph;
module.exports.score = score;
module.exports.claimCells = claimCells;