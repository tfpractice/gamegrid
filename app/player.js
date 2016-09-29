const { addNodes, spawn: gSpawn } = require('./game_graph');

const player = (name) => ({
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

module.exports = player;
module.exports.getName = getName;
module.exports.getGraph = getGraph;
module.exports.score = score;
module.exports.resetScore = resetScore;
module.exports.incrementScore = incrementScore;
module.exports.decrementScore = decrementScore;
module.exports.claimCells = claimCells;