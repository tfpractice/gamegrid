const FGT = require('functional_graph_theory');
const Cell = require('./cell');
const Connex = require('./connections');
const { Graph: { nodes, addNodes, removeNodes, fromElements } } = FGT;
const { joinCols, joinRows, joinPVectors, joinNVectors, joinAdj } = Connex;
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

const omniGraph = (graph) => joinAdj(fromElements(...nodes(graph)));
const colGraph = (graph) => joinCols(fromElements(...nodes(graph)));
const rowGraph = (graph) => joinRows(fromElements(...nodes(graph)));
const posGraph = (graph) => joinPVectors(fromElements(...nodes(graph)));
const negGraph = (graph) => joinNVectors(fromElements(...nodes(graph)));
const playerGraph = (graph) => (p) => (fromElements(...nodesByPlayer(graph)(p)));

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
	playerGraph,
});