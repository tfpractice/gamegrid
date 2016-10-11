const FGT = require('functional_graph_theory');
const Cell = require('./cell');
const { Graph: { nodes, addNodes, removeNodes, fromElements } } = FGT;
const { sameCol, sameRow, samePlayer, isNeighbor } = Cell;
const { samePVector, sameNVector } = Cell;

const nodesByColumn = (graph) => (column = 0) =>
	nodes(graph).filter(sameCol({ column }));

const nodesByPlayer = (graph) => (player = null) =>
	nodes(graph).filter(samePlayer({ player }));

const nodesByRow = (graph) => (row = 0) =>
	nodes(graph).filter(sameRow({ row }));

const nodesByPVector = (graph) => (column = 0, row = 0) =>
	nodes(graph).filter(samePVector({ column, row }));

const nodesByNVector = (graph) => (column = 0, row = 0) =>
	nodes(graph).filter(sameNVector({ column, row }));

const nodeByPosition = (graph) => (column = 0, row = 0) =>
	nodes(graph).find(Cell.isEquivalent({ column, row }));

const playerGraph = (graph) => (p) => (fromElements(...nodesByPlayer(graph)(p)));

const transferNodes = (src) => (dest) => (...nodes) =>
	removeNodes(src)(...nodes) && addNodes(dest)(...nodes);

module.exports = Object.assign({}, FGT.Graph, {
	nodesByPlayer,
	nodesByColumn,
	nodeByPosition,
	nodesByPVector,
	nodesByNVector,
	nodesByRow,
	transferNodes,
	playerGraph,
});