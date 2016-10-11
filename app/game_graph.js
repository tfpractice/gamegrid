const FGT = require('functional_graph_theory');
const Cell = require('./cell');
const { Graph, utils, Traversals } = FGT;
const { nodes, addNodes, removeNodes, addEdges } = Graph;
// const { spreadValues } = utils;
const { componentSet } = Traversals;
const { sameCol, sameRow, isNeighbor } = Cell;
const { samePVector, sameNVector } = Cell;

const cells = nodes;

const cellsByColumn = (graph) => (column = 0) =>
	cells(graph).filter(sameCol({ column }));

const cellsByRow = (graph) => (row = 0) =>
	cells(graph).filter(sameRow({ row }));

const cellByPosition = (graph) => (column = 0, row = 0) =>
	cells(graph).find(Cell.isEquivalent({ column, row }));

const adjCells = (graph) => (src) => cells(graph).filter(isNeighbor(src));

const addCells = (graph) => (...nodes) =>
	connectAdjacents(addNodes(graph)(...nodes));

const removeCells = (graph) => (...nodes) =>
	connectAdjacents(removeNodes(graph)(...nodes));

const connectAdjR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...adjCells(graph)(src));

const connectAdjacents = (graph) => cells(graph).reduce(connectAdjR, graph);

const transferCells = (src) => (dest) => (...nodes) =>
	removeCells(src)(...nodes) && addNodes(dest)(...nodes);

const countComponents = (graph) => componentSet(graph).size;

module.exports = Object.assign({}, Graph, {
	cells,
	cellsByColumn,
	cellByPosition,
	cellsByRow,
	connectAdjR,
	connectAdjacents,
	adjCells,
	transferCells,
	addCells,
	removeCells,
	// getComponents,
	countComponents,
});