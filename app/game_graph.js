const FGT = require('functional_graph_theory');
const Cell = require('./cell');
const Connections = require('./connections');
const { Graph: { nodes, addNodes, removeNodes, fromElements } } = FGT;
const { connectCols, connectRows, connectPVectors, connectNVectors, connectAdj } =
Connections;
const { sameCol, sameRow, samePlayer, isNeighbor } = Cell;
const { samePVector, sameNVector } = Cell;

const nodesByColumn = (graph) => (column = 0) =>
	nodes(graph).filter(sameCol({ column }));

const nodesByPlayer = (graph) => (player = null) =>
	nodes(graph).filter(samePlayer({ player }));

const nodesByRow = (graph) => (row = 0) =>
	nodes(graph).filter(sameRow({ row }));

const nodeByPosition = (graph) => (column = 0, row = 0) =>
	nodes(graph).find(Cell.isEquivalent({ column, row }));

const omniGraph = (graph) => connectAdj(fromElements(...nodes(graph)));
const colGraph = (graph) => connectCols(fromElements(...nodes(graph)));
const rowGraph = (graph) => connectRows(fromElements(...nodes(graph)));
const posGraph = (graph) => connectPVectors(fromElements(...nodes(graph)));
const negGraph = (graph) => connectNVectors(fromElements(...nodes(graph)));

const transferNodes = (src) => (dest) => (...nodes) =>
	removeNodes(src)(...nodes) && addNodes(dest)(...nodes);

module.exports = Object.assign({}, FGT.Graph, {
	nodesByPlayer,
	nodesByColumn,
	nodeByPosition,
	nodesByRow,
	transferNodes,
	omniGraph,
	colGraph,
	rowGraph,
	posGraph,
	negGraph,
});