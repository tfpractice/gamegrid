const { Graph, utils: gUtil } = require('functional_graph_theory');
const { nodes, addEdge } = Graph;
const { spreadKeys, spreadValues, spreadEntries } = gUtil;
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

const cells = ({ cells: c, edges }) => [...(nodes({ edges }))] || c;
const getCells = cells;

const state = (cNum = 3, rNum = 3) => ({
	cNum,
	rNum,
	cells: initCells(cNum, rNum),
});

const makeGrid = ({ cNum, rNum, cells }) =>
	Object.assign(Graph(...cells), { cNum, rNum, cells });

const cellsByColumn = ({ cells }) => (cID = 0) =>
	cells.filter(({ column }) => column === cID);

const cellsByRow = ({ cells }) => (rID = 0) =>
	cells.filter(({ row }) => row === rID);

const colInit = ({ cNum, edges, cells }) => {
	for (let c = cNum - 1; c >= 0; c--) {
		cellsByColumn({ cells })(c)
			.reduce((prev, next) => addEdge({ edges })(prev)(next) && next);

	}

	// console.log(Graph.showGraph({ edges }));
};

const rowInit = ({ rNum, edges, cells }) => {
	for (let r = rNum - 1; r >= 0; r--) {
		cellsByRow({ cells })(r)
			.reduce((prev, next) => addEdge({ edges })(prev)(next) && next);

	}

	// console.log(Graph.showGraph({ edges }));
};

const initEdges = ({ rNum, cNum, edges, cells }) => {
	let graph = { rNum, cNum, edges, cells };
	cells.forEach((prev) =>
		adjNodes({ cells })(prev).map(addEdge(graph)(prev))
	);
	// rowInit(graph);
	// colInit(graph);
	console.log(Graph.showGraph(graph));
};

const colDiff = ({ column: c0 }) => ({ column: c1 }) => Math.abs(c0 - c1);
const rowDiff = ({ row: r0 }) => ({ row: r1 }) => Math.abs(r0 - r1);
const cAdj = (src) => (alt) => colDiff(src)(alt) < 1;
const rAdj = (src) => (alt) => rowDiff(src)(alt) < 1;
const adjNodes = ({ cells }) => (src) =>
	cNabes = cells.filter(cAdj(src)).concat(cells.filter(rAdj(src)));
// let rNabes=cells.filter((c) => rowDiff(src)(c) < 1);



//
//
//
//
//
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