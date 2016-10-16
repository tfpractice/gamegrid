const FGT = require('functional_graph_theory');
const Cell = require('./cell');
const { Graph: { fromElements, nodes, addEdges } } = FGT;
const { sameCol, sameRow, samePVector, sameNVector, isNeighbor } = Cell;

const adjNodes = (grid) => (src) => nodes(grid).filter(isNeighbor(src));

const rowAdj = (grid) => (src) => adjNodes(grid)(src).filter(sameRow(src));
const colAdj = (grid) => (src) => adjNodes(grid)(src).filter(sameCol(src));
const posAdj = (grid) => (src) => adjNodes(grid)(src).filter(samePVector(src));
const negAdj = (grid) => (src) => adjNodes(grid)(src).filter(sameNVector(src));
const allAdj = (grid) => (src) => adjNodes(grid)(src).filter(isNeighbor(src));

const adjConnectR = (grid = new Map, src) =>
	addEdges(grid)(src, 0)(...adjNodes(grid)(src));

const colConnectR = (grid = new Map, src) =>
	addEdges(grid)(src, 0)(...colAdj(grid)(src));

const rowConnectR = (grid = new Map, src) =>
	addEdges(grid)(src, 0)(...rowAdj(grid)(src));

const posConnectR = (grid = new Map, src) =>
	addEdges(grid)(src, 0)(...posAdj(grid)(src));

const negConnectR = (grid = new Map, src) =>
	addEdges(grid)(src, 0)(...negAdj(grid)(src));

const joinAdj = (grid) => nodes(grid).reduce(adjConnectR, grid);
const joinCols = (grid) => nodes(grid).reduce(colConnectR, grid);
const joinRows = (grid) => nodes(grid).reduce(rowConnectR, grid);
const joinPVectors = (grid) => nodes(grid).reduce(posConnectR, grid);
const joinNVectors = (grid) => nodes(grid).reduce(negConnectR, grid);

const colComponents = (grid) => componentSet(colGraph(grid));
const rowComponents = (grid) => componentSet(rowGraph(grid));
const posComponents = (grid) => componentSet(posGraph(grid));
const negComponents = (grid) => componentSet(negGraph(grid));

module.exports = {
	adjNodes,
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