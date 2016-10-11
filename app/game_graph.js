const FGT = require('functional_graph_theory');
const Cell = require('./cell');
const Connections = require('./connections');
const { Graph: { nodes, addNodes, removeNodes, fromElements } } = FGT;
const { connectCols, connectRows, connectPVectors, connectNVectors, } =
Connections;
const { sameCol, sameRow, samePlayer, isNeighbor } = Cell;
const { samePVector, sameNVector } = Cell;
// console.log(Connections);
const cells = nodes;

const cellsByColumn = (graph) => (column = 0) =>
	cells(graph).filter(sameCol({ column }));

const cellsByPlayer = (graph) => (player = null) =>
	cells(graph).filter(samePlayer({ player }));

const cellsByRow = (graph) => (row = 0) =>
	cells(graph).filter(sameRow({ row }));

const cellByPosition = (graph) => (column = 0, row = 0) =>
	cells(graph).find(Cell.isEquivalent({ column, row }));

// const omniGraph = (graph)=> connectAdj
const colGraph = (graph) => connectCols(fromElements(...cells(graph)));
const rowGraph = (graph) => connectRows(fromElements(...cells(graph)));
const posGraph = (graph) => connectPVectors(fromElements(...cells(graph)));
const negGraph = (graph) => connectNVectors(fromElements(...cells(graph)));

const transferCells = (src) => (dest) => (...nodes) =>
	removeNodes(src)(...nodes) && addNodes(dest)(...nodes);

// const countComponents = (graph) => componentSet(graph).size;

module.exports = Object.assign({}, FGT.Graph, { cells,
    cellsByPlayer,
    cellsByColumn,
    cellByPosition,
    cellsByRow,
	transferCells,
	colGraph,
	rowGraph,
    posGraph,
    negGraph,

    // countComponents,
});
