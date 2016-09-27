const { Graph, utils, traversals } = require('functional_graph_theory');
const grid = require('./grid');
const cell = require('./cell');
const { addEdge, removeEdge } = Graph;
const { nodes, edges } = Graph;
const { addNodes, removeNode } = Graph;
const { importEdge, mergeGraphs } = Graph;
const { clearNodes, clearEdges, showGraph } = Graph;
const { spreadKeys, spreadValues, spreadEntries } = utils;
const { dfs, bfs, dijkstra, components } = traversals;
const { colDiff, rowDiff, cAdj, rAdj, isEquivalent, x_isEquivalent } = cell;
const { initEdges, makeGrid, state: gState } = grid;
// const player = (name) => ({
// 	name,
// 	graph: (makeGrid(gState(0, 0))),
// });
const player = (name) => Object.assign(makeGrid(gState(0, 0)), { name });
// const assignCells = (player) =>
// 	Object.assign(player, { cells: [...Graph.nodes(player.graph)] });

const getName = ({ name }) => name;
const getGraph = ({ graph }) => graph;
const claimCells = ({ graph }) => (...cells) =>
	addNodes(graph)(...cells) && initEdges(graph);
const getComponents = ({ graph }) =>
	components(graph);

module.exports = player;
module.exports.getName = getName;
module.exports.getGraph = getGraph;
module.exports.claimCells = claimCells;
module.exports.getComponents = getComponents;
