const { addNodes, spawn: gSpawn } = require('./game_graph');

const spawn = (name) => ({
	name,
	graph: gSpawn(),
	score: 0,
});

const getName = ({ name }) => name;
const getGraph = ({ graph }) => graph;
const score = ({ score }) => score;
const resetScore = (player) => player.score = 0;
const incrementScore = (player) => ++player.score;
const decrementScore = (player) => --player.score;
const claimCells = ({ graph }) => addNodes(graph);

module.exports = {
	spawn,
	getName,
	getGraph,
	score,
	resetScore,
	incrementScore,
	decrementScore,
	claimCells,
};