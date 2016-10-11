const FGT = require('functional_graph_theory');
const Cell = require('./cell');
const { Graph, utils, Traversals } = FGT;
const { nodes, addNodes, removeNodes, addEdges } = Graph;
const { componentSet } = Traversals;
const { sameCol, sameRow, samePlayer, isNeighbor } = Cell;
const { samePVector, sameNVector } = Cell;

const cells = nodes;

const cellsByColumn = (graph) => (column = 0) =>
	cells(graph).filter(sameCol({ column }));
const cellsByPlayer = (graph) => (player = null) =>
	cells(graph).filter(samePlayer({ player }));

const cellsByRow = (graph) => (row = 0) =>
	cells(graph).filter(sameRow({ row }));

const cellByPosition = (graph) => (column = 0, row = 0) =>
	cells(graph).find(Cell.isEquivalent({ column, row }));

const adjCells = (graph) => (src) => cells(graph).filter(isNeighbor(src));

const addCells = (graph) => (...nodes) =>
	(addNodes(graph)(...nodes));

const removeCells = (graph) => (...nodes) =>
	(removeNodes(graph)(...nodes));

const transferCells = (src) => (dest) => (...nodes) =>
	removeCells(src)(...nodes) && addNodes(dest)(...nodes);

// const countComponents = (graph) => componentSet(graph).size;

module.exports = Object.assign({}, Graph, {
	cells,
	cellsByPlayer,
	cellsByColumn,
	cellByPosition,
	cellsByRow,
	transferCells,
	addCells,
	removeCells,
	// countComponents,
});