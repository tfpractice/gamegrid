// const { Graph, utils: gUtil, traversals } = require('functional_graph_theory');
// const Cell = require('./cell');
// const { addEdge, removeEdge } = Graph;
// const { importEdge, mergeGraphs } = Graph;
// const { clearNodes, clearEdges, showGraph } = Graph;
// const { spreadKeys, spreadValues, spreadEntries } = gUtil;
// const { colDiff, rowDiff, cAdj, rAdj, isEquivalent, x_isEquivalent } = Cell;

// const AsyncGrid = Graph;

// const initEdges = (grid) => {
// 	cells(grid).forEach((prev) =>
// 		adjNodes(grid)(prev).map(n => addEdge(grid)(prev)(n))
// 	);
// };

// const subGrid = (...elements) => Graph(...elements);
// const addNodes = (grid) => (...nodes) =>
// 	new Promise((resolve, reject) => {
// 		Graph.addNodes(grid)(...nodes);
// 		resolve(grid);
// 	});

// const removeNodes = (grid) => (...nodes) =>
// 	new Promise((resolve, reject) => {
// 		nodes.forEach(n => Graph.removeNode(grid)(n));
// 		resolve(grid);
// 	});

// module.exports = AsyncGrid;
// module.exports.addNode = addNodes;
// module.exports.removeNodes = removeNodes;
