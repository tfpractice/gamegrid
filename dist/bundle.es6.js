import { Grid, Node, adjNodes, allAdj, cIDs, colAdj, colComponents, colGraph, fromGrid, genNodes, initNodes, joinAdj, joinAdjBin, joinCols, joinColsBin, joinNVectors, joinNVectorsBin, joinPVectors, joinPVectorsBin, joinRows, joinRowsBin, negAdj, negComponents, negGraph, nodeByPosition, nodesByColumn, nodesByNVector, nodesByPVector, nodesByRow, omniGraph, posAdj, posComponents, posGraph, rIDs, rowAdj, rowComponents, rowGraph } from 'graph-curry';

var nodeString = function nodeString(_ref3) {
  var column = _ref3.column,
      row = _ref3.row;
  return "{ node::" + column + "_" + row + " }";
};
var node = function node() {
  var column = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return { column: column, row: row, toString: function toString() {
      return nodeString({ column: column, row: row });
    } };
};

export { Grid, Node, adjNodes, rowAdj, colAdj, posAdj, negAdj, allAdj, joinAdjBin, joinColsBin, joinRowsBin, joinPVectorsBin, joinNVectorsBin, joinAdj, joinCols, joinRows, joinPVectors, joinNVectors, omniGraph, colGraph, rowGraph, posGraph, negGraph, colComponents, rowComponents, posComponents, negComponents, genNodes, cIDs, rIDs, initNodes, fromGrid, nodesByColumn, nodesByRow, nodesByPVector, nodesByNVector, nodeByPosition };
//# sourceMappingURL=bundle.es6.js.map
