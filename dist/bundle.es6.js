import { addEdges, componentSet, fromElements, nodes } from 'graph-curry';

var atan = Math.atan;
var abs = Math.abs;
var PI = Math.PI;


var column = function column(_ref) {
  var column = _ref.column;
  return column;
};
var row = function row(_ref2) {
  var row = _ref2.row;
  return row;
};
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

var colDiff = function colDiff(_ref4) {
  var c0 = _ref4.column;
  return function (_ref5) {
    var c1 = _ref5.column;
    return c0 - c1;
  };
};
var rowDiff = function rowDiff(_ref6) {
  var r0 = _ref6.row;
  return function (_ref7) {
    var r1 = _ref7.row;
    return r0 - r1;
  };
};
var tangent = function tangent(n0) {
  return function (n1) {
    return rowDiff(n0)(n1) / colDiff(n0)(n1);
  };
};
var angleBetween = function angleBetween(n0) {
  return function (n1) {
    return (atan(tangent(n0)(n1)) % PI + PI) % PI;
  };
};

var sameCol = function sameCol(n0) {
  return function (n1) {
    return abs(colDiff(n0)(n1)) === 0;
  };
};
var sameRow = function sameRow(n0) {
  return function (n1) {
    return abs(rowDiff(n0)(n1)) === 0;
  };
};
var samePVector = function samePVector(n0) {
  return function (n1) {
    return angleBetween(n0)(n1) === PI * 0.25;
  };
};
var sameNVector = function sameNVector(n0) {
  return function (n1) {
    return angleBetween(n0)(n1) === PI * 0.75;
  };
};

var cAdj = function cAdj(n0) {
  return function (n1) {
    return abs(colDiff(n0)(n1)) < 2;
  };
};
var rAdj = function rAdj(n0) {
  return function (n1) {
    return abs(rowDiff(n0)(n1)) < 2;
  };
};

var isEquivalent = function isEquivalent(c0) {
  return function (c1) {
    return sameCol(c0)(c1) && sameRow(c0)(c1);
  };
};
var xEquivalent = function xEquivalent(src) {
  return function (alt) {
    return !isEquivalent(src)(alt);
  };
};

var isNeighbor = function isNeighbor(n0) {
  return function (n1) {
    return xEquivalent(n0)(n1) && cAdj(n0)(n1) && rAdj(n0)(n1);
  };
};



var node$2 = Object.freeze({
	column: column,
	row: row,
	nodeString: nodeString,
	node: node,
	colDiff: colDiff,
	rowDiff: rowDiff,
	tangent: tangent,
	angleBetween: angleBetween,
	sameCol: sameCol,
	sameRow: sameRow,
	samePVector: samePVector,
	sameNVector: sameNVector,
	cAdj: cAdj,
	rAdj: rAdj,
	isEquivalent: isEquivalent,
	xEquivalent: xEquivalent,
	isNeighbor: isNeighbor,
	default: node
});

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var adjNodes = function adjNodes(grid) {
  return function (src) {
    return nodes(grid).filter(isNeighbor(src));
  };
};

var rowAdj = function rowAdj(grid) {
  return function (src) {
    return adjNodes(grid)(src).filter(sameRow(src));
  };
};
var colAdj = function colAdj(grid) {
  return function (src) {
    return adjNodes(grid)(src).filter(sameCol(src));
  };
};
var posAdj = function posAdj(grid) {
  return function (src) {
    return adjNodes(grid)(src).filter(samePVector(src));
  };
};
var negAdj = function negAdj(grid) {
  return function (src) {
    return adjNodes(grid)(src).filter(sameNVector(src));
  };
};
var allAdj = function allAdj(grid) {
  return function (src) {
    return adjNodes(grid)(src).filter(isNeighbor(src));
  };
};

var joinAdjBin = function joinAdjBin() {
  var grid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
  var src = arguments[1];
  return addEdges(grid)(src, 0).apply(undefined, toConsumableArray(adjNodes(grid)(src)));
};

var joinColsBin = function joinColsBin() {
  var grid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
  var src = arguments[1];
  return addEdges(grid)(src, 0).apply(undefined, toConsumableArray(colAdj(grid)(src)));
};

var joinRowsBin = function joinRowsBin() {
  var grid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
  var src = arguments[1];
  return addEdges(grid)(src, 0).apply(undefined, toConsumableArray(rowAdj(grid)(src)));
};

var joinPVectorsBin = function joinPVectorsBin() {
  var grid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
  var src = arguments[1];
  return addEdges(grid)(src, 0).apply(undefined, toConsumableArray(posAdj(grid)(src)));
};

var joinNVectorsBin = function joinNVectorsBin() {
  var grid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
  var src = arguments[1];
  return addEdges(grid)(src, 0).apply(undefined, toConsumableArray(negAdj(grid)(src)));
};

var joinAdj = function joinAdj(grid) {
  return nodes(grid).reduce(joinAdjBin, grid);
};
var joinCols = function joinCols(grid) {
  return nodes(grid).reduce(joinColsBin, grid);
};
var joinRows = function joinRows(grid) {
  return nodes(grid).reduce(joinRowsBin, grid);
};
var joinPVectors = function joinPVectors(grid) {
  return nodes(grid).reduce(joinPVectorsBin, grid);
};
var joinNVectors = function joinNVectors(grid) {
  return nodes(grid).reduce(joinNVectorsBin, grid);
};

var omniGraph = function omniGraph(grid) {
  return joinAdj(fromElements.apply(undefined, toConsumableArray(nodes(grid))));
};
var colGraph = function colGraph(grid) {
  return joinCols(fromElements.apply(undefined, toConsumableArray(nodes(grid))));
};
var rowGraph = function rowGraph(grid) {
  return joinRows(fromElements.apply(undefined, toConsumableArray(nodes(grid))));
};
var posGraph = function posGraph(grid) {
  return joinPVectors(fromElements.apply(undefined, toConsumableArray(nodes(grid))));
};
var negGraph = function negGraph(grid) {
  return joinNVectors(fromElements.apply(undefined, toConsumableArray(nodes(grid))));
};

var colComponents = function colComponents(grid) {
  return componentSet(colGraph(grid));
};
var rowComponents = function rowComponents(grid) {
  return componentSet(rowGraph(grid));
};
var posComponents = function posComponents(grid) {
  return componentSet(posGraph(grid));
};
var negComponents = function negComponents(grid) {
  return componentSet(negGraph(grid));
};

var genNodes = function genNodes() {
  var cols = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var nodes$$1 = [];

  for (var c = cols - 1; c >= 0; c--) {
    for (var r = rows - 1; r >= 0; r--) {
      nodes$$1.unshift(node(c, r));
    }
  }

  return nodes$$1;
};

var cIDs = function cIDs(grid) {
  return new Set(nodes(grid).map(column));
};
var rIDs = function rIDs(grid) {
  return new Set(nodes(grid).map(row));
};

var initNodes = function initNodes() {
  var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return fromElements.apply(undefined, toConsumableArray(genNodes(c, r)));
};
var fromGrid = function fromGrid(grid) {
  return fromElements.apply(undefined, toConsumableArray(nodes(grid)));
};

var nodesByColumn = function nodesByColumn(grid) {
  return function () {
    var column$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return nodes(grid).filter(sameCol({ column: column$$1 }));
  };
};

var nodesByRow = function nodesByRow(grid) {
  return function () {
    var row$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return nodes(grid).filter(sameRow({ row: row$$1 }));
  };
};

var nodesByPVector = function nodesByPVector(grid) {
  return function () {
    var column$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var row$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return nodes(grid).filter(samePVector({ column: column$$1, row: row$$1 }));
  };
};

var nodesByNVector = function nodesByNVector(grid) {
  return function () {
    var column$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var row$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return nodes(grid).filter(sameNVector({ column: column$$1, row: row$$1 }));
  };
};

var nodeByPosition = function nodeByPosition(grid) {
  return function () {
    var column$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var row$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return nodes(grid).find(isEquivalent({ column: column$$1, row: row$$1 }));
  };
};



var src$1 = Object.freeze({
	Node: node$2,
	grid: initNodes,
	node: node,
	adjNodes: adjNodes,
	rowAdj: rowAdj,
	colAdj: colAdj,
	posAdj: posAdj,
	negAdj: negAdj,
	allAdj: allAdj,
	joinAdjBin: joinAdjBin,
	joinColsBin: joinColsBin,
	joinRowsBin: joinRowsBin,
	joinPVectorsBin: joinPVectorsBin,
	joinNVectorsBin: joinNVectorsBin,
	joinAdj: joinAdj,
	joinCols: joinCols,
	joinRows: joinRows,
	joinPVectors: joinPVectors,
	joinNVectors: joinNVectors,
	omniGraph: omniGraph,
	colGraph: colGraph,
	rowGraph: rowGraph,
	posGraph: posGraph,
	negGraph: negGraph,
	colComponents: colComponents,
	rowComponents: rowComponents,
	posComponents: posComponents,
	negComponents: negComponents,
	genNodes: genNodes,
	cIDs: cIDs,
	rIDs: rIDs,
	initNodes: initNodes,
	fromGrid: fromGrid,
	nodesByColumn: nodesByColumn,
	nodesByRow: nodesByRow,
	nodesByPVector: nodesByPVector,
	nodesByNVector: nodesByNVector,
	nodeByPosition: nodeByPosition
});

export { node$2 as Node, initNodes as grid, node, adjNodes, rowAdj, colAdj, posAdj, negAdj, allAdj, joinAdjBin, joinColsBin, joinRowsBin, joinPVectorsBin, joinNVectorsBin, joinAdj, joinCols, joinRows, joinPVectors, joinNVectors, omniGraph, colGraph, rowGraph, posGraph, negGraph, colComponents, rowComponents, posComponents, negComponents, genNodes, cIDs, rIDs, initNodes, fromGrid, nodesByColumn, nodesByRow, nodesByPVector, nodesByNVector, nodeByPosition };export default src$1;
//# sourceMappingURL=bundle.es6.js.map
