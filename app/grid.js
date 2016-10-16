const FGT = require('functional_graph_theory');
const Cell = require('./cell');
const { Graph: { nodes, addNodes, removeNodes, fromElements } } = FGT;
const { sameCol, sameRow, samePlayer, isNeighbor } = Cell;
const { samePVector, sameNVector } = Cell;

const initCells = (cNum = 0, rNum = 0) => {
	let cells = [];
	for (var c = cNum - 1; c >= 0; c--) {
		for (var r = rNum - 1; r >= 0; r--) {
			cells.unshift(Cell.spawn(c, r));
		}
	}

	return fromElements(...cells);
};

const fromGrid = (grid) => initCells(colIDs(grid).size, rowIDs(grid).size);

const nodesByColumn = (grid) => (column = 0) =>
	nodes(grid).filter(sameCol({ column }));

const nodesByRow = (grid) => (row = 0) =>
	nodes(grid).filter(sameRow({ row }));

const nodesByPVector = (grid) => (column = 0, row = 0) =>
	nodes(grid).filter(samePVector({ column, row }));

const nodesByNVector = (grid) => (column = 0, row = 0) =>
	nodes(grid).filter(sameNVector({ column, row }));

const nodeByPosition = (grid) => (column = 0, row = 0) =>
	nodes(grid).find(Cell.isEquivalent({ column, row }));

const colIDs = (grid) => new Set(nodes(grid).map(Cell.column));
const rowIDs = (grid) => new Set(nodes(grid).map(Cell.row));
const transferNodes = (src) => (dest) => (...nodes) =>
	removeNodes(src)(...nodes) && addNodes(dest)(...nodes);

module.exports = Object.assign({}, FGT.Graph, {
	nodesByColumn,
	nodeByPosition,
	nodesByPVector,
	nodesByNVector,
	nodesByRow,
	transferNodes,

	colIDs,
	rowIDs,
	fromGrid,
	initCells,
});