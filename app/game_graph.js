const FGT = require('functional_graph_theory');
const Cell = require('./cell');
const { Graph, utils, traversals, AsyncOps: AS } = FGT;
const { sameColumn, sameRow, isNeighbor } = Cell;
const { samePVector, sameNVector } = Cell;
const { nodes, addEdge } = Graph;
const { spreadValues } = utils;
const { components } = traversals;

const spawn = Graph.fromElements;
const cells = (graph) => spreadValues(nodes(graph));

const cellsByColumn = (graph) => (column = 0) =>
	cells(graph).filter(sameColumn({ column }));

const cellsByRow = (graph) => (row = 0) =>
	cells(graph).filter(sameRow({ row }));

const cellByPosition = (graph) => (column = 0, row = 0) =>
	cells(graph).find(Cell.isEquivalent({ column, row }));

const addNodes = (graph) => (...nodes) => {
	Graph.addNodes(graph)(...nodes);
	connectAdjacents(graph);
	return graph;
};

const removeNodes = (graph) => (...nodes) => {
	nodes.forEach(n => Graph.removeNode(graph)(n));
	connectAdjacents(graph);
	return graph;
};

const adjNodes = (graph) => (src) => cells(graph).filter(isNeighbor(src));

const rowNeighbors = (graph) => (src) =>
	adjNodes(graph)(src).filter(sameRow(src));

const columnNeighbors = (graph) => (src) =>
	adjNodes(graph)(src).filter(sameColumn(src));

const posNeighbors = (graph) => (src) =>
	adjNodes(graph)(src).filter(samePVector(src));

const negNeighbors = (graph) => (src) =>
	adjNodes(graph)(src).filter(sameNVector(src));

const connectAdjacents = (graph) => {
	cells(graph).forEach((prev) =>
		adjNodes(graph)(prev).map(n => addEdge(graph)(prev)(n))
	);
	return graph;
};

const connectCols = (graph) => {
	cells(graph).forEach((prev) =>
		columnNeighbors(graph)(prev).map(n => addEdge(graph)(prev)(n))
	);
	return graph;
};

const connectRows = (graph) => {
	cells(graph).forEach((prev) =>
		rowNeighbors(graph)(prev).map(n => addEdge(graph)(prev)(n))
	);
	return graph;
};

const connectPVectors = (graph) => {
	cells(graph).forEach((prev) =>
		posNeighbors(graph)(prev).map(n => addEdge(graph)(prev)(n))
	);
	return graph;
};

const connectNVectors = (graph) => {
	cells(graph).forEach((prev) =>
		negNeighbors(graph)(prev).map(n => addEdge(graph)(prev)(n))
	);
	return graph;
};

const colGraph = (graph) => connectCols(spawn(...cells(graph)));
const rowGraph = (graph) => connectRows(spawn(...cells(graph)));
const posGraph = (graph) => connectPVectors(spawn(...cells(graph)));
const negGraph = (graph) => connectNVectors(spawn(...cells(graph)));
const colComponents = (graph) => getComponents(colGraph(graph));
const rowComponents = (graph) => getComponents(rowGraph(graph));
const posComponents = (graph) => getComponents(posGraph(graph));
const negComponents = (graph) => getComponents(negGraph(graph));

const transferCells = (src) => (dest) => (...nodes) => {
	removeNodes(src)(...nodes);
	addNodes(dest)(...nodes);
};

const getComponents = (graph) =>
	new Set(spreadValues(components(graph)));

const countComponents = (graph) => getComponents(graph).size;

module.exports = {
	spawn,
	cells,
	cellsByColumn,
	cellByPosition,
	cellsByRow,
	rowNeighbors,
	columnNeighbors,
	posNeighbors,
	negNeighbors,
	connectAdjacents,
	adjNodes,
	transferCells,
	addNodes,
	removeNodes,
	getComponents,
	countComponents,
	connectCols,
	connectRows,
	connectPVectors,
	connectNVectors,
	colGraph,
	rowGraph,
	posGraph,
	negGraph,
	colComponents,
	rowComponents,
	posComponents,
	negComponents,
};