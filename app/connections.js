const FGT = require('functional_graph_theory');
const Cell = require('./cell');
const GameGraph = require('./game_graph');
const { Traversals: { componentSet } } = FGT;
const { sameCol, sameRow, samePVector, sameNVector, isNeighbor } = Cell;
const { fromElements, cells, adjCells, addEdges } = GameGraph;

const adjCells = (graph) => (src) =>
	cells(graph).filter(isNeighbor(src));
const rowAdj = (graph) => (src) =>
	adjCells(graph)(src).filter(sameRow(src));

const colAdj = (graph) => (src) =>
	adjCells(graph)(src).filter(sameCol(src));

const posAdj = (graph) => (src) =>
	adjCells(graph)(src).filter(samePVector(src));

const negAdj = (graph) => (src) =>
	adjCells(graph)(src).filter(sameNVector(src));

const allAdj = (graph) => (src) =>
	adjCells(graph)(src).filter(isNeighbor(src));

const colConnectR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...rowAdj(graph)(src));

const rowConnectR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...colAdj(graph)(src));

const posConnectR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...posAdj(graph)(src));

const negConnectR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...negAdj(graph)(src));

const adjConnectR = (graph = new Map, src) =>
	addEdges(graph)(src, 0)(...adjCells(graph)(src));

const connectCols = (graph) => cells(graph).reduce(colConnectR, graph);
const connectRows = (graph) => cells(graph).reduce(rowConnectR, graph);
const connectPVectors = (graph) => cells(graph).reduce(posConnectR, graph);
const connectNVectors = (graph) => cells(graph).reduce(negConnectR, graph);
const connectAdj = (graph) => cells(graph).reduce(adjConnectR, graph);

const colGraph = (graph) => connectCols(fromElements(...cells(graph)));
const rowGraph = (graph) => connectRows(fromElements(...cells(graph)));
const posGraph = (graph) => connectPVectors(fromElements(...cells(graph)));
const negGraph = (graph) => connectNVectors(fromElements(...cells(graph)));
const colComponents = (graph) => componentSet(colGraph(graph));
const rowComponents = (graph) => componentSet(rowGraph(graph));
const posComponents = (graph) => componentSet(posGraph(graph));
const negComponents = (graph) => componentSet(negGraph(graph));

module.exports = {
	rowAdj,
	colAdj,
	posAdj,
	negAdj,
	allAdj,
	connectCols,
	connectRows,
	connectPVectors,
	connectNVectors,
	connectAdj,
	colGraph,
	rowGraph,
	posGraph,
	negGraph,
	colComponents,
	rowComponents,
	posComponents,
	negComponents,
};