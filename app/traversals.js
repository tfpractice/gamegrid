const FGT = require('functional_graph_theory');
const Connex = require('./connections');
const { joinCols, joinRows, joinPVectors, joinNVectors, joinAdj } = Connex;
const { Traversals: { componentSet }, Graph: { fromElements, nodes } } = FGT;

const omniGraph = (graph) => joinAdj(fromElements(...nodes(graph)));
const colGraph = (graph) => joinCols(fromElements(...nodes(graph)));
const rowGraph = (graph) => joinRows(fromElements(...nodes(graph)));
const posGraph = (graph) => joinPVectors(fromElements(...nodes(graph)));
const negGraph = (graph) => joinNVectors(fromElements(...nodes(graph)));

const colComponents = (graph) => componentSet(colGraph(graph));
const rowComponents = (graph) => componentSet(rowGraph(graph));
const posComponents = (graph) => componentSet(posGraph(graph));
const negComponents = (graph) => componentSet(negGraph(graph));

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