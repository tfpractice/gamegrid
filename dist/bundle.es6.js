import { Components, Graph } from 'graph-curry';
import { asSet, filter, map, spread } from 'fenugreek-collections';

var init = { column: null, row: null, id: '' };

// **column** `::  Node ->  Number`
// returns a node's column property
var column = function column() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init,
      column = _ref.column;

  return column;
};

// **row** `::  Node ->  Number`
// returns a node's row property
var row = function row() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init,
      row = _ref2.row;

  return row;
};

// **id** `::  Node ->  String`
// returns a node's row property
var id = function id() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init,
      id = _ref3.id;

  return id;
};

// **show** `::  Node ->  String`
// returns a string representation of a node
var show = function show() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init,
      column = _ref4.column,
      row = _ref4.row;

  return '<c' + column + '_r' + row + '>';
};

// **node** `::  (Number, Number) -> Node`
// returns an object with column and row properties
var node = function node() {
  var column = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return { column: column, row: row, id: show({ column: column, row: row }) };
};

// **copy** `::  Node -> Node`
// returns a copy of a node
var copy = function copy(n) {
  return node(column(n), row(n));
};

// **setCol** `::  Node -> Node`
// returns a copy of a node with a modified row
var setCol = function setCol(c) {
  return function (n) {
    return node(c, row(n));
  };
};

// **setRow** `::  Node -> Node`
// returns a copy of a node with a modified row
var setRow = function setRow(r) {
  return function (n) {
    return node(column(n), r);
  };
};

var node$1 = Object.freeze({
	column: column,
	row: row,
	id: id,
	show: show,
	node: node,
	copy: copy,
	setCol: setCol,
	setRow: setRow
});

var atan = Math.atan;
var abs = Math.abs;
var PI = Math.PI;

// **colDiff** `::  Node-> Node -> Number`
// returns the difference of two nodes column properties

var colDiff = function colDiff(n0) {
  return function (n1) {
    return column(n0) - column(n1);
  };
};

// **rowDiff** `::  Node-> Node -> Number`
// returns the difference of two nodes row properties
var rowDiff = function rowDiff(n0) {
  return function (n1) {
    return row(n0) - row(n1);
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
var angleBetween = function angleBetween(a) {
  return function (b) {
    return (atan(tangent(a)(b)) % PI + PI) % PI;
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

// **samePos** `::  Node -> Node -> Boolean`
// checks if two nodes share position
var samePos = function samePos(c0) {
  return function (c1) {
    return sameCol(c0)(c1) && sameRow(c0)(c1);
  };
};

// **diffPos** `::  Node -> Node -> Boolean`
// checks if two nodes don't share position
var diffPos = function diffPos(src) {
  return function (alt) {
    return !samePos(src)(alt);
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

// **isNeighbor** `::  Map<edge> ->  node  -> Map<edge>`
// checks if two different nodes are neighbors
var isNeighbor = function isNeighbor(a) {
  return function (b) {
    return diffPos(a)(b) && cAdj(a)(b) && rAdj(a)(b);
  };
};

var compare = Object.freeze({
	colDiff: colDiff,
	rowDiff: rowDiff,
	tangent: tangent,
	angleBetween: angleBetween,
	sameCol: sameCol,
	sameRow: sameRow,
	samePVector: samePVector,
	sameNVector: sameNVector,
	samePos: samePos,
	diffPos: diffPos,
	cAdj: cAdj,
	rAdj: rAdj,
	isNeighbor: isNeighbor
});

// **byCol** `::  [Node] ->  Number  -> [Node]`
// returns an array of nodes  with the specified column id
var byCol = function byCol(nodes) {
  return function () {
    var column$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return filter(nodes)(sameCol({ column: column$$1 }));
  };
};

// **byRow** `::  [Node] ->  Number  -> [Node]`
// returns an array of nodes  with the specified row id
var byRow = function byRow(nodes) {
  return function () {
    var row$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return filter(nodes)(sameRow({ row: row$$1 }));
  };
};

// **byPVec** `:: [Node] ->  (Number, Number)  -> [Node]`
// returns an array of nodes on the specified postive diagonal
var byPVec = function byPVec(nodes) {
  return function () {
    var column$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var row$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return filter(nodes)(samePVector({ column: column$$1, row: row$$1 }));
  };
};

// **byNVec** `:: [Node] ->  (Number, Number)  -> [Node]`
// returns an array of nodes on the specified negative diagonal
var byNVec = function byNVec(nodes) {
  return function () {
    var column$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var row$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return filter(nodes)(sameNVector({ column: column$$1, row: row$$1 }));
  };
};

// **byPosition** `::  [Node] ->  node  -> Node`
// returns a node at the specified position
var byPosition = function byPosition(nodes) {
  return function () {
    var column$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var row$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return spread(nodes).find(samePos({ column: column$$1, row: row$$1 }));
  };
};

// **cIDs** `::  [Node] -> Set<Number>`
// returns a Set of a grid's columns
var cIDs = function cIDs(nodes) {
  return spread(asSet(map(nodes)(column)));
};

// **rIDs** `::  [Node] -> Set<Number>`
// returns a Set of a grid's rows
var rIDs = function rIDs(nodes) {
  return spread(asSet(map(nodes)(row)));
};

// **byAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all nodes
var byAdj = function byAdj(nodes) {
  return function (src) {
    return filter(nodes)(isNeighbor(src));
  };
};

// **rowAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all rows
var rowAdj = function rowAdj(nodes) {
  return function (src) {
    return filter(byAdj(nodes)(src))(sameRow(src));
  };
};

// **colAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all columns
var colAdj = function colAdj(nodes) {
  return function (src) {
    return filter(byAdj(nodes)(src))(sameCol(src));
  };
};

// **posAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all positive diagonals
var posAdj = function posAdj(nodes) {
  return function (src) {
    return filter(byAdj(nodes)(src))(samePVector(src));
  };
};

// **negAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all negative diagonal
var negAdj = function negAdj(nodes) {
  return function (src) {
    return filter(byAdj(nodes)(src))(sameNVector(src));
  };
};

var filter$1 = Object.freeze({
	byCol: byCol,
	byRow: byRow,
	byPVec: byPVec,
	byNVec: byNVec,
	byPosition: byPosition,
	cIDs: cIDs,
	rIDs: rIDs,
	byAdj: byAdj,
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

var joinAdj = function joinAdj(g, n) {
  return addEdges(g)(n, 0).apply(undefined, toConsumableArray(byAdj(nodes$1(g))(n)));
};

// **joinCols** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its column neighbors
var joinCols = function joinCols(g, n) {
  return addEdges(g)(n, 0).apply(undefined, toConsumableArray(colAdj(nodes$1(g))(n)));
};

// **joinRows** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its row neighbors
var joinRows = function joinRows(g, n) {
  return addEdges(g)(n, 0).apply(undefined, toConsumableArray(rowAdj(nodes$1(g))(n)));
};

// **joinPVectors** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its positive neighbors
var joinPVectors = function joinPVectors(g, n) {
  return addEdges(g)(n, 0).apply(undefined, toConsumableArray(posAdj(nodes$1(g))(n)));
};

// **joinNVectors** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its negative neighbors
var joinNVectors = function joinNVectors(g, n) {
  return addEdges(g)(n, 0).apply(undefined, toConsumableArray(negAdj(nodes$1(g))(n)));
};



var join = Object.freeze({
	joinAdj: joinAdj,
	joinCols: joinCols,
	joinRows: joinRows,
	joinPVectors: joinPVectors,
	joinNVectors: joinNVectors
});

var graph = Graph.graph;
var nodes = Graph.nodes;

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

// **grid** `::  (Number, Number) -> Map<edge>`
// returns a Map of edges with the specified number of columns and rows
var grid = function grid() {
  var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return graph.apply(undefined, toConsumableArray(genNodes(c, r)));
};

// **copy** `::  Map<edge> ->  node  -> Map<edge>`
// returns a copy of a grid
var copy$1 = function copy$$1(grid) {
  return graph.apply(undefined, toConsumableArray(nodes(grid)));
};

// **colNodes** `::  Map<edge> ->  Number  -> [Node]`
// returns an array of nodes  with the specified column id
var colNodes = function colNodes(grid) {
  return function () {
    var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return byCol(nodes(grid))(c);
  };
};

// **rowNodes** `::  Map<edge> ->  Number  -> [Node]`
// returns an array of nodes  with the specified row id
var rowNodes = function rowNodes(grid) {
  return function () {
    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return byRow(nodes(grid))(r);
  };
};

// **posNodestor** `:: Map<edge> ->  (Number, Number)  -> [Node]`
// returns an array of nodes on the specified postive diagonal
var posNodes = function posNodes(grid) {
  return function () {
    var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return byPVec(nodes(grid))(c, r);
  };
};

// **negNodestor** `:: Map<edge> ->  (Number, Number)  -> [Node]`
// returns an array of nodes on the specified negative diagonal
var negNodes = function negNodes(grid) {
  return function () {
    var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return byNVec(nodes(grid))(c, r);
  };
};

// **findNode** `::  Map<edge> ->  node  -> Node`
// returns a node at the specified position
var findNode = function findNode(grid) {
  return function () {
    var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return byPosition(nodes(grid))(c, r);
  };
};

// **joinGrid** `::  Map<edge>  -> Map<edge>`
// returns a copy of a grid with edges joining all nodes with all their neighbors
var joinGrid = function joinGrid(grid) {
  return nodes(grid).reduce(joinAdj, grid);
};

// **colGrid** `::  Map<edge> -> Map<edge>`
// returns a copy of a grid with edges joining all nodes with all their column eighbors
var colGrid = function colGrid(grid) {
  return nodes(grid).reduce(joinCols, grid);
};

// **rowGrid** `::  Map<edge>  -> Map<edge>`
// returns a copy of a grid with edges joining all nodes with all their row neighbors
var rowGrid = function rowGrid(grid) {
  return nodes(grid).reduce(joinRows, grid);
};

// **posGrid** `::  Map<edge>  -> Map<edge>`
// returns a copy of a grid with edges joining all nodes with all their positive neighbors
var posGrid = function posGrid(grid) {
  return nodes(grid).reduce(joinPVectors, grid);
};

// **negGrid** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining all nodes with all their negative neighbors
var negGrid = function negGrid(grid) {
  return nodes(grid).reduce(joinNVectors, grid);
};



var grid$1 = Object.freeze({
	genNodes: genNodes,
	grid: grid,
	copy: copy$1,
	colNodes: colNodes,
	rowNodes: rowNodes,
	posNodes: posNodes,
	negNodes: negNodes,
	findNode: findNode,
	joinGrid: joinGrid,
	colGrid: colGrid,
	rowGrid: rowGrid,
	posGrid: posGrid,
	negGrid: negGrid
});

var componentSet = Components.componentSet;

// **colComps** `::  Map<edge>  -> Set<edge>`
// returns a set of all columnn connected components

var colComps = function colComps(grid$$1) {
  return componentSet(colGrid(grid$$1));
};

// **rowComps** `::  Map<edge>  -> Set<edge>`
// returns a set of all row connected components
var rowComps = function rowComps(grid$$1) {
  return componentSet(rowGrid(grid$$1));
};

// **posComps** `::  Map<edge>  -> Set<edge>`
// returns a set of all positive connected components
var posComps = function posComps(grid$$1) {
  return componentSet(posGrid(grid$$1));
};

// **negComps** `::  Map<edge>  -> Set<edge>`
// returns a set of all negative connected components
var negComps = function negComps(grid$$1) {
  return componentSet(negGrid(grid$$1));
};

// **omniComps** `::  Map<edge>  -> Set<edge>`
// returns a set of all connected components
var omniComps = function omniComps(grid$$1) {
  return [colComps, negComps, posComps, rowComps].map(function (f) {
    return f(grid$$1);
  }).reduce(function (set, next) {
    return new Set(set).add(next);
  }, new Set());
};

// **splitComps** `::  Map<edge>  -> Set<edge>`
// returns a map of all connected components by direction
var splitComps = function splitComps(g) {
  return new Map().set('row', rowComps(g)).set('col', colComps(g)).set('pos', posComps(g)).set('neg', negComps(g));
};

var components = Object.freeze({
	colComps: colComps,
	rowComps: rowComps,
	posComps: posComps,
	negComps: negComps,
	omniComps: omniComps,
	splitComps: splitComps
});

export { compare as Compare, components as Components, filter$1 as Filter, grid$1 as Grid, join as Join, node$1 as Node };
//# sourceMappingURL=bundle.es6.js.map
