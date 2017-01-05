const FGT = require('functional_graph_theory');
const Connex = require('./connections');
const { joinCols, joinRows, joinPVectors, joinNVectors, joinAdj } = Connex;
const { Traversals: { componentSet }, Graph: { fromElements, nodes }} = FGT;

const omniGraph = grid => joinAdj(fromElements(...nodes(grid)));
const colGraph = grid => joinCols(fromElements(...nodes(grid)));
const rowGraph = grid => joinRows(fromElements(...nodes(grid)));
const posGraph = grid => joinPVectors(fromElements(...nodes(grid)));
const negGraph = grid => joinNVectors(fromElements(...nodes(grid)));

const colComponents = grid => componentSet(colGraph(grid));
const rowComponents = grid => componentSet(rowGraph(grid));
const posComponents = grid => componentSet(posGraph(grid));
const negComponents = grid => componentSet(negGraph(grid));

module.exports = Object.assign({}, FGT.Traversals, {
    omniGraph,
    colGraph,
    rowGraph,
    posGraph,
    negGraph,
    colComponents,
    rowComponents,
    posComponents,
    negComponents,
});
