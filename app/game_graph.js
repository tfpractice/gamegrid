const { Graph, utils, traversals } = require('functional_graph_theory');
const { sameColumn, sameRow, isNeighbor } = require('./cell');
const { nodes, addEdge } = Graph;
const { components } = traversals;

const spawn = Graph;
const cells = ({ edges }) => [...(nodes({ edges }))];

const cellsByColumn = (graph) => (column = 0) =>
	cells(graph).filter(sameColumn({ column }));

const cellsByRow = (graph) => (row = 0) =>
	cells(graph).filter(sameRow({ row }));

const addNodes = (graph) => (...nodes) => {
	Graph.addNodes(graph)(...nodes);
	connectAdjacents(graph);
};

const removeNodes = (graph) => (...nodes) => {
	nodes.forEach(n => Graph.removeNode(graph)(n));
	connectAdjacents(graph);
};

const adjNodes = (graph) => (src) =>
	cells(graph).filter(isNeighbor(src));

const connectAdjacents = (graph) => {
	cells(graph).forEach((prev) =>
		adjNodes(graph)(prev).map(n => addEdge(graph)(prev)(n))
	);
};

const getComponents = (graph) =>
	new Set(utils.spreadValues(components(graph)));
const countComponents = (graph) => getComponents(graph).size;

exports.spawn = spawn;
exports.cells = cells;
exports.cellsByColumn = cellsByColumn;
exports.cellsByRow = cellsByRow;
exports.connectAdjacents = connectAdjacents;
exports.adjNodes = adjNodes;
exports.addNodes = addNodes;
exports.removeNodes = removeNodes;
exports.getComponents = getComponents;