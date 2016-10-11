const FGT = require('functional_graph_theory');
const Cell = require('./cell');
const { Traversals: { componentSet }, Graph: { fromElements, nodes, addEdges } } =
FGT;
const { sameCol, sameRow, samePVector, sameNVector, isNeighbor } = Cell;

const adjNodes = (graph) => (src) => nodes(graph).filter(isNeighbor(src));

const rowAdj = (graph) => (src) => adjNodes(graph)(src).filter(sameRow(src));
const colAdj = (graph) => (src) => adjNodes(graph)(src).filter(sameCol(src));
const posAdj = (graph) => (src) => adjNodes(graph)(src).filter(samePVector(src));
const negAdj = (graph) => (src) => adjNodes(graph)(src).filter(sameNVector(src));
const allAdj = (graph) => (src) => adjNodes(graph)(src).filter(isNeighbor(src));

const adjConnectR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...adjNodes(graph)(src));

const colConnectR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...colAdj(graph)(src));

const rowConnectR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...rowAdj(graph)(src));

const posConnectR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...posAdj(graph)(src));

const negConnectR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...negAdj(graph)(src));

const joinAdj = (graph) => nodes(graph).reduce(adjConnectR, graph);
const joinCols = (graph) => nodes(graph).reduce(colConnectR, graph);
const joinRows = (graph) => nodes(graph).reduce(rowConnectR, graph);
const joinPVectors = (graph) => nodes(graph).reduce(posConnectR, graph);
const joinNVectors = (graph) => nodes(graph).reduce(negConnectR, graph);

const colComponents = (graph) => componentSet(colGraph(graph));
const rowComponents = (graph) => componentSet(rowGraph(graph));
const posComponents = (graph) => componentSet(posGraph(graph));
const negComponents = (graph) => componentSet(negGraph(graph));
const adjCells = adjNodes;

module.exports = {
	adjNodes,
	adjCells,
	rowAdj,
	colAdj,
	posAdj,
	negAdj,
	adjConnectR,
	joinAdj,
	joinCols,
	joinRows,
	joinPVectors,
	joinNVectors,
	joinAdj,
};