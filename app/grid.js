const { Graph, utils: gUtil } = require('functional_graph_theory');
const cell = require('./cell');

const { nodes, addEdge } = Graph;
const { spreadKeys, spreadValues, spreadEntries } = gUtil;
const { colDiff, rowDiff, cAdj, rAdj } = cell;
const { isNeighbor, isEquivalent, x_isEquivalent } = cell;

const defG = { cNum: 3, rNum: 3, cells: [] };

let initCells = (cNum = 0, rNum = 0) => {
	let cells = [];
	for (var c = cNum - 1; c >= 0; c--) {
		for (var r = rNum - 1; r >= 0; r--) {
			cells.push(cell(c, r));
		}
	}

	return cells;
};

const cells = ({ edges }) => [...(nodes({ edges }))];
const getCells = cells;

const state = (cNum = 3, rNum = 3) => ({
	cNum,
	rNum,
	cells: initCells(cNum, rNum),
});

const makeGrid = ({ cNum, rNum }) =>
	// Object.assign(Graph(...cells), { cNum, rNum, cells });
	Object.assign(Graph(...(initCells(cNum, rNum))), { cNum, rNum });

const cellsByColumn = ({ edges }) => (cID = 0) =>
	cells({ edges }).filter(({ column }) => column === cID);

const cellsByRow = ({ edges }) => (rID = 0) =>
	cells({ edges }).filter(({ row }) => row === rID);

const colInit = ({ cNum, edges }) => {
	for (let c = cNum - 1; c >= 0; c--) {
		cellsByColumn({ edges })(c)
			.reduce((prev, next) => addEdge({ edges })(prev)(next) && next);
	}
};

const rowInit = ({ rNum, edges }) => {
	for (let r = rNum - 1; r >= 0; r--) {
		cellsByRow({ edges })(r)
			.reduce((prev, next) => addEdge({ edges })(prev)(next) && next);
	}
};

const initEdges = (grid) => {
	cells(grid).forEach((prev) =>
		adjNodes(grid)(prev).map(n => addEdge(grid)(prev)(n))
	);
};

const subGrid = (...elements) => Graph(...elements);
const addNodes = (grid) => (...nodes) => {
	Graph.addNodes(grid)(...nodes);
	initEdges(grid);
};

const removeNodes = (grid) => (...nodes) => {
	nodes.forEach(n => Graph.removeNode(grid)(n));
	initEdges(grid);
};

const adjNodes = (grid) => (src) =>
	cells(grid).filter(isNeighbor(src));

exports.state = state;
exports.makeGrid = makeGrid;
exports.initCells = initCells;
exports.cells = cells;
exports.cellsByColumn = cellsByColumn;
exports.cellsByRow = cellsByRow;
exports.colInit = colInit;
exports.rowInit = rowInit;
exports.initEdges = initEdges;
exports.adjNodes = adjNodes;
exports.subGrid = subGrid;
exports.addNodes = addNodes;
exports.removeNodes = removeNodes;