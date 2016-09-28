const GameGraph = require('./game_graph');
const cell = require('./cell');

const state = (cNum = 3, rNum = 3) => ({ cNum, rNum });

const initCells = (cNum = 0, rNum = 0) => {
	let cells = [];
	for (var c = cNum - 1; c >= 0; c--) {
		for (var r = rNum - 1; r >= 0; r--) {
			cells.push(cell(c, r));
		}
	}

	return cells;
};

const makeGrid = ({ cNum = 0, rNum = 0 }) =>
	Object.assign(GameGraph.spawn(...(initCells(cNum, rNum))), { cNum, rNum });

module.exports = {
	state,
	makeGrid,
	initCells,
};