const { Graph, utils: gUtil } = require('functional_graph_theory');
const cell = require('./cell');
const { colDiff, rowDiff, cAdj, rAdj, isEquivalent, x_isEquivalent } = cell;

const { nodes, addEdge } = Graph;
const { spreadKeys, spreadValues, spreadEntries } = gUtil;

const mutableGrid = (...elements) => graph(...elements);

module.exports = mutableGrid;