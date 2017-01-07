const FGT = require('graph-curry');
const Cell = require('./cell');
const { Graph: { nodes, addNodes, removeNodes, fromElements } } = FGT;
const { sameCol, sameRow, samePlayer, isNeighbor } = Cell;
const { samePVector, sameNVector } = Cell;

const cellArray = (cols = 0, rows = 0) => {
	let cells = [];
	for (let c = cols - 1; c >= 0; c--) {
		for (let r = rows - 1; r >= 0; r--) {
			cells.unshift(Cell.spawn(c, r));
		}
	}

	return cells;
};

const cIDs = (grid) => new Set(nodes(grid).map(Cell.column));
const rIDs = (grid) => new Set(nodes(grid).map(Cell.row));

const initCells = (c = 0, r = 0) => fromElements(...cellArray(c, r));

const fromGrid = (grid) =>
	fromElements(...cellArray(cIDs(grid).size, rIDs(grid).size));

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

const transferNodes = (src) => (dest) => (...nodes) =>
	removeNodes(src)(...nodes) && addNodes(dest)(...nodes);

module.exports = Object.assign({}, FGT.Graph, {
	nodesByColumn,
	nodeByPosition,
	nodesByPVector,
	nodesByNVector,
	nodesByRow,
	transferNodes,
	cIDs,
	rIDs,
	fromGrid,
	cellArray,
	initCells,
});