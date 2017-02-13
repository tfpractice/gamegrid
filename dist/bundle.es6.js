import { Components, Graph } from 'graph-curry';

var atan = Math.atan;
var abs = Math.abs;
var PI = Math.PI;

// **column** `::  Node ->  Number`
// returns a node's column property

var column = function column(_ref) {
  var column = _ref.column;
  return column;
};

// **row** `::  Node ->  Number`
// returns a node's row property
var row = function row(_ref2) {
  var row = _ref2.row;
  return row;
};

// **nodeString** `::  Node ->  String`
// returns a string representation of a node
var nodeString = function nodeString(_ref3) {
  var column = _ref3.column,
      row = _ref3.row;
  return "{ node::" + column + "_" + row + " }";
};

// **node** `::  (Number, Number) -> Node`
// returns an object with column and row properties
var node = function node() {
  var column = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return { column: column, row: row, toString: function toString() {
      return nodeString({ column: column, row: row });
    } };
};

// **copy** `::  Node -> Node`
// returns a copy of a node
var copy = function copy(n) {
  return node(column(n), row(n));
};

// **colDiff** `::  Node-> Node -> Number`
// returns the difference of two nodes column properties
var colDiff = function colDiff(_ref4) {
  var c0 = _ref4.column;
  return function (_ref5) {
    var c1 = _ref5.column;
    return c0 - c1;
  };
};

// **rowDiff** `::  Node-> Node -> Number`
// returns the difference of two nodes row properties
var rowDiff = function rowDiff(_ref6) {
  var r0 = _ref6.row;
  return function (_ref7) {
    var r1 = _ref7.row;
    return r0 - r1;
  };
};

// **tangent** `::  Node-> Node -> Number`
// returns the column difference to row difference ratio of two nodes
var tangent = function tangent(n0) {
  return function (n1) {
    return rowDiff(n0)(n1) / colDiff(n0)(n1);
  };
};

// **angleBetween** `::  Node -> Node -> Number`
// returns a the angle between two nodes in radians
var angleBetween = function angleBetween(n0) {
  return function (n1) {
    return (atan(tangent(n0)(n1)) % PI + PI) % PI;
  };
};

// **sameCol** `:: Node -> Node -> Boolean`
// checks for equality between two nodes column properties
var sameCol = function sameCol(n0) {
  return function (n1) {
    return abs(colDiff(n0)(n1)) === 0;
  };
};

// **sameRow** `::  Node -> Node -> Boolean`
// checks for equality between two nodes row properties
var sameRow = function sameRow(n0) {
  return function (n1) {
    return abs(rowDiff(n0)(n1)) === 0;
  };
};

// **samePVector** `::  Node -> Node -> Boolean``
// checks if two nodes lie on the same positive diagonal
var samePVector = function samePVector(n0) {
  return function (n1) {
    return angleBetween(n0)(n1) === PI * 0.25;
  };
};

// **sameNVector** `::  Node -> Node -> Boolean`
// checks if two nodes lie on the same negative diagonal
var sameNVector = function sameNVector(n0) {
  return function (n1) {
    return angleBetween(n0)(n1) === PI * 0.75;
  };
};

// **cAdj** `::  Node -> Node -> Boolean`
// checks if two nodes lie on the same column
var cAdj = function cAdj(n0) {
  return function (n1) {
    return abs(colDiff(n0)(n1)) < 2;
  };
};

// **rAdj** `:: Node -> Node -> Boolean
// checks if two nodes lie on the same row
var rAdj = function rAdj(n0) {
  return function (n1) {
    return abs(rowDiff(n0)(n1)) < 2;
  };
};

// **isEquivalent** `::  Node -> Node -> Boolean`
// checks if two nodes share position
var isEquivalent = function isEquivalent(c0) {
  return function (c1) {
    return sameCol(c0)(c1) && sameRow(c0)(c1);
  };
};

// **xEquivalent** `::  Node -> Node -> Boolean`
// checks if two nodes don't share position
var xEquivalent = function xEquivalent(src) {
  return function (alt) {
    return !isEquivalent(src)(alt);
  };
};

// **isNeighbor** `::  Map<edge> ->  node  -> Map<edge>`
// checks if two different nodes are neighbors
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

// **allAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all nodes

var allAdj = function allAdj(g) {
  return function (src) {
    return nodes(g).filter(isNeighbor(src));
  };
};

// **rowAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all rows
var rowAdj = function rowAdj(g) {
  return function (src) {
    return allAdj(g)(src).filter(sameRow(src));
  };
};

// **colAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all columns
var colAdj = function colAdj(g) {
  return function (src) {
    return allAdj(g)(src).filter(sameCol(src));
  };
};

// **posAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all positive diagonals
var posAdj = function posAdj(g) {
  return function (src) {
    return allAdj(g)(src).filter(samePVector(src));
  };
};

// **negAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all negative diagonal
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

// **joinAdj** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its neighbors

var joinAdj = function joinAdj(g, src) {
  return addEdges(g)(src, 0).apply(undefined, toConsumableArray(allAdj(g)(src)));
};

// **joinCols** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its column neighbors
var joinCols = function joinCols(g, src) {
  return addEdges(g)(src, 0).apply(undefined, toConsumableArray(colAdj(g)(src)));
};

// **joinRows** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its row neighbors
var joinRows = function joinRows(g, src) {
  return addEdges(g)(src, 0).apply(undefined, toConsumableArray(rowAdj(g)(src)));
};

// **joinPVectors** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its positive neighbors
var joinPVectors = function joinPVectors(g, src) {
  return addEdges(g)(src, 0).apply(undefined, toConsumableArray(posAdj(g)(src)));
};

// **joinNVectors** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its negative neighbors
var joinNVectors = function joinNVectors(g, src) {
  return addEdges(g)(src, 0).apply(undefined, toConsumableArray(negAdj(g)(src)));
};

// **joinGrid** `::  Map<edge>  -> Map<edge>`
// returns a copy of a grid with edges joining all nodes with all their neighbors
var joinGrid = function joinGrid(grid) {
  return nodes$1(grid).reduce(joinAdj, grid);
};

// **colGrid** `::  Map<edge> -> Map<edge>`
// returns a copy of a grid with edges joining all nodes with all their column eighbors
var colGrid = function colGrid(grid) {
  return nodes$1(grid).reduce(joinCols, grid);
};

// **rowGrid** `::  Map<edge>  -> Map<edge>`
// returns a copy of a grid with edges joining all nodes with all their row neighbors
var rowGrid = function rowGrid(grid) {
  return nodes$1(grid).reduce(joinRows, grid);
};

// **posGrid** `::  Map<edge>  -> Map<edge>`
// returns a copy of a grid with edges joining all nodes with all their positive neighbors
var posGrid = function posGrid(grid) {
  return nodes$1(grid).reduce(joinPVectors, grid);
};

// **negGrid** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining all nodes with all their negative neighbors
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

// **colComponents** `::  Map<edge>  -> Set<edge>`
// returns a set of all columnn connected components

var colComponents = function colComponents(grid) {
  return componentSet(colGrid(grid));
};

// **rowComponents** `::  Map<edge>  -> Set<edge>`
// returns a set of all row connected components
var rowComponents = function rowComponents(grid) {
  return componentSet(rowGrid(grid));
};

// **posComponents** `::  Map<edge>  -> Set<edge>`
// returns a set of all positive connected components
var posComponents = function posComponents(grid) {
  return componentSet(posGrid(grid));
};

// **negComponents** `::  Map<edge>  -> Set<edge>`
// returns a set of all negative connected components
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

// **genNodes** `::  (Number, Number) -> [Node]`
// returns an array of nodes the specified number of columns and rows

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

// **cIDs** `::  Map<edge> -> Set<Number>`
// returns a Set of a grid's columns
var cIDs = function cIDs(grid) {
  return new Set(nodes$2(grid).map(column));
};

// **rIDs** `::  Map<edge> -> Set<Number>`
// returns a Set of a grid's rows
var rIDs = function rIDs(grid) {
  return new Set(nodes$2(grid).map(row));
};

// **grid** `::  (Number, Number) -> Map<edge>`
// returns a Map of edges with the specified number of columns and rows
var grid = function grid() {
  var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return fromElements.apply(undefined, toConsumableArray(genNodes(c, r)));
};

// **copy** `::  Map<edge> ->  node  -> Map<edge>`
// returns a copy of a grid
var copy$1 = function copy$$1(grid) {
  return fromElements.apply(undefined, toConsumableArray(nodes$2(grid)));
};

// **nodesByColumn** `::  Map<edge> ->  Number  -> [Node]`
// returns an array of nodes  with the specified column id
var nodesByColumn = function nodesByColumn(grid) {
  return function () {
    var column$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return nodes$2(grid).filter(sameCol({ column: column$$1 }));
  };
};

// **nodesByRow** `::  Map<edge> ->  Number  -> [Node]`
// returns an array of nodes  with the specified row id
var nodesByRow = function nodesByRow(grid) {
  return function () {
    var row$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return nodes$2(grid).filter(sameRow({ row: row$$1 }));
  };
};

// **nodesByPVector** `:: Map<edge> ->  (Number, Number)  -> [Node]`
// returns an array of nodes on the specified postive diagonal
var nodesByPVector = function nodesByPVector(grid) {
  return function () {
    var column$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var row$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return nodes$2(grid).filter(samePVector({ column: column$$1, row: row$$1 }));
  };
};

// **nodesByNVector** `:: Map<edge> ->  (Number, Number)  -> [Node]`
// returns an array of nodes on the specified negative diagonal
var nodesByNVector = function nodesByNVector(grid) {
  return function () {
    var column$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var row$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return nodes$2(grid).filter(sameNVector({ column: column$$1, row: row$$1 }));
  };
};

// **nodeByPosition** `::  Map<edge> ->  node  -> Node`
// returns a node at the specified position
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
