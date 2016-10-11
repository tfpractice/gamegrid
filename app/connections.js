const FGT = require('functional_graph_theory');
const Cell = require('./cell');
const { Traversals: { componentSet }, Graph: { fromElements, nodes, addEdges } } =
FGT;
const { sameCol, sameRow, samePVector, sameNVector, isNeighbor } = Cell;

const adjCells = (graph) => (src) => nodes(graph).filter(isNeighbor(src));
const rowAdj = (graph) => (src) => adjCells(graph)(src).filter(sameRow(src));
const colAdj = (graph) => (src) => adjCells(graph)(src).filter(sameCol(src));
const posAdj = (graph) => (src) => adjCells(graph)(src).filter(samePVector(src));
const negAdj = (graph) => (src) => adjCells(graph)(src).filter(sameNVector(src));
const allAdj = (graph) => (src) => adjCells(graph)(src).filter(isNeighbor(src));

const adjConnectR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...adjCells(graph)(src));

const colConnectR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...rowAdj(graph)(src));

const rowConnectR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...colAdj(graph)(src));

const posConnectR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...posAdj(graph)(src));

const negConnectR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...negAdj(graph)(src));

const connectAdj = (graph) => nodes(graph).reduce(adjConnectR, graph);
const connectCols = (graph) => nodes(graph).reduce(colConnectR, graph);
const connectRows = (graph) => nodes(graph).reduce(rowConnectR, graph);
const connectPVectors = (graph) => nodes(graph).reduce(posConnectR, graph);
const connectNVectors = (graph) => nodes(graph).reduce(negConnectR, graph);
// const colGraph = (graph) => connectCols(fromElements(...nodes(graph)));
// const rowGraph = (graph) => connectRows(fromElements(...nodes(graph)));
// const posGraph = (graph) => connectPVectors(fromElements(...nodes(graph)));
// const negGraph = (graph) => connectNVectors(fromElements(...nodes(graph)));
const colComponents = (graph) => componentSet(colGraph(graph));
const rowComponents = (graph) => componentSet(rowGraph(graph));
const posComponents = (graph) => componentSet(posGraph(graph));
const negComponents = (graph) => componentSet(negGraph(graph));

module.exports = {
	adjCells,
	rowAdj,
	colAdj,
	posAdj,
	negAdj,
	adjConnectR,
	connectAdj,
	connectCols,
	connectRows,
	connectPVectors,
	connectNVectors,
	connectAdj,
	// colGraph,
	// rowGraph,
	// posGraph,
	// negGraph,
	colComponents,
	rowComponents,
	posComponents,
	negComponents,
};