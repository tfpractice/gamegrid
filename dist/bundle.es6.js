import { Components, Graph } from 'graph-curry';

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
var copy = function copy(n) {
  return node(column(n), row(n));
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

var node$1 = Object.freeze({
	column: column,
	row: row,
	nodeString: nodeString,
	node: node,
	copy: copy,
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
	isNeighbor: isNeighbor
});

var nodes = Graph.nodes;


var allAdj = function allAdj(g) {
  return function (src) {
    return nodes(g).filter(isNeighbor(src));
  };
};
var rowAdj = function rowAdj(g) {
  return function (src) {
    return allAdj(g)(src).filter(sameRow(src));
  };
};
var colAdj = function colAdj(g) {
  return function (src) {
    return allAdj(g)(src).filter(sameCol(src));
  };
};
var posAdj = function posAdj(g) {
  return function (src) {
    return allAdj(g)(src).filter(samePVector(src));
  };
};
var negAdj = function negAdj(g) {
  return function (src) {
    return allAdj(g)(src).filter(sameNVector(src));
  };
};

var adj = Object.freeze({
	allAdj: allAdj,
	rowAdj: rowAdj,
	colAdj: colAdj,
	posAdj: posAdj,
	negAdj: negAdj
});

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var addEdges = Graph.addEdges;
var nodes$1 = Graph.nodes;


var joinAdj = function joinAdj(g, src) {
  return addEdges(g)(src, 0).apply(undefined, toConsumableArray(allAdj(g)(src)));
};
var joinCols = function joinCols(g, src) {
  return addEdges(g)(src, 0).apply(undefined, toConsumableArray(colAdj(g)(src)));
};
var joinRows = function joinRows(g, src) {
  return addEdges(g)(src, 0).apply(undefined, toConsumableArray(rowAdj(g)(src)));
};
var joinPVectors = function joinPVectors(g, src) {
  return addEdges(g)(src, 0).apply(undefined, toConsumableArray(posAdj(g)(src)));
};
var joinNVectors = function joinNVectors(g, src) {
  return addEdges(g)(src, 0).apply(undefined, toConsumableArray(negAdj(g)(src)));
};

var joinGrid = function joinGrid(grid) {
  return nodes$1(grid).reduce(joinAdj, grid);
};
var colGrid = function colGrid(grid) {
  return nodes$1(grid).reduce(joinCols, grid);
};
var rowGrid = function rowGrid(grid) {
  return nodes$1(grid).reduce(joinRows, grid);
};
var posGrid = function posGrid(grid) {
  return nodes$1(grid).reduce(joinPVectors, grid);
};
var negGrid = function negGrid(grid) {
  return nodes$1(grid).reduce(joinNVectors, grid);
};



var join = Object.freeze({
	joinAdj: joinAdj,
	joinCols: joinCols,
	joinRows: joinRows,
	joinPVectors: joinPVectors,
	joinNVectors: joinNVectors,
	joinGrid: joinGrid,
	colGrid: colGrid,
	rowGrid: rowGrid,
	posGrid: posGrid,
	negGrid: negGrid
});

var componentSet = Components.componentSet;


var colComponents = function colComponents(grid) {
  return componentSet(colGrid(grid));
};
var rowComponents = function rowComponents(grid) {
  return componentSet(rowGrid(grid));
};
var posComponents = function posComponents(grid) {
  return componentSet(posGrid(grid));
};
var negComponents = function negComponents(grid) {
  return componentSet(negGrid(grid));
};

var components = Object.freeze({
	colComponents: colComponents,
	rowComponents: rowComponents,
	posComponents: posComponents,
	negComponents: negComponents
});

var fromElements = Graph.fromElements;
var nodes$2 = Graph.nodes;


var genNodes = function genNodes() {
  var cols = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var nArr = [];

  for (var c = cols - 1; c >= 0; c--) {
    for (var r = rows - 1; r >= 0; r--) {
      nArr.unshift(node(c, r));
    }
  }

  return nArr;
};

var cIDs = function cIDs(grid) {
  return new Set(nodes$2(grid).map(column));
};
var rIDs = function rIDs(grid) {
  return new Set(nodes$2(grid).map(row));
};

var grid = function grid() {
  var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return fromElements.apply(undefined, toConsumableArray(genNodes(c, r)));
};
var copy$1 = function copy$$1(grid) {
  return fromElements.apply(undefined, toConsumableArray(nodes$2(grid)));
};

var nodesByColumn = function nodesByColumn(grid) {
  return function () {
    var column$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return nodes$2(grid).filter(sameCol({ column: column$$1 }));
  };
};

var nodesByRow = function nodesByRow(grid) {
  return function () {
    var row$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return nodes$2(grid).filter(sameRow({ row: row$$1 }));
  };
};

var nodesByPVector = function nodesByPVector(grid) {
  return function () {
    var column$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var row$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return nodes$2(grid).filter(samePVector({ column: column$$1, row: row$$1 }));
  };
};

var nodesByNVector = function nodesByNVector(grid) {
  return function () {
    var column$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var row$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return nodes$2(grid).filter(sameNVector({ column: column$$1, row: row$$1 }));
  };
};

var nodeByPosition = function nodeByPosition(grid) {
  return function () {
    var column$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var row$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return nodes$2(grid).find(isEquivalent({ column: column$$1, row: row$$1 }));
  };
};



var grid$1 = Object.freeze({
	genNodes: genNodes,
	cIDs: cIDs,
	rIDs: rIDs,
	grid: grid,
	copy: copy$1,
	nodesByColumn: nodesByColumn,
	nodesByRow: nodesByRow,
	nodesByPVector: nodesByPVector,
	nodesByNVector: nodesByNVector,
	nodeByPosition: nodeByPosition
});

export { adj as Adj, components as Components, grid$1 as Grid, join as Join, node$1 as Node };
//# sourceMappingURL=bundle.es6.js.map
