const { Graph } = require('functional_graph_theory');
const { nodes } = Graph;
const cell = require('./cell');
const defG = { cNum: 3, rNum: 3, cells: [] };

let initCells = (cNum = 3, rNum = 3) => {
	let cells = [];
	for (var c = cNum - 1; c >= 0; c--) {
		for (var r = rNum - 1; r >= 0; r--) {
			cells.push(cell(c, r));
		}
	}

	return cells;
};

const graphCells = ({ edges }) => nodes({ edges });

const cells = ({ cells } = defG) => cells;
const state = (cNum = 3, rNum = 3) => ({
	cNum,
	rNum,
	cells: initCells(cNum, rNum),
});
const makeGrid = ({ cells }) => Graph(...cells);
// const gridString = ({ cNum, rNum } = defG) =>

exports.state = state;
exports.makeGrid = makeGrid;
exports.initCells = initCells;
exports.cells = cells;