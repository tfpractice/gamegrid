import { addNodes, fromElements, nodes, removeNodes } from 'graph-curry';

var atan = Math.atan;
var abs = Math.abs;
var PI = Math.PI;


var spawn = function spawn() {
  var column = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return { column: column, row: row, toString: function toString() {
      return cellString({ column: column, row: row });
    } };
};
var column = function column(_ref) {
  var column = _ref.column;
  return column;
};
var row = function row(_ref2) {
  var row = _ref2.row;
  return row;
};
var cellString = function cellString(_ref3) {
  var column = _ref3.column,
      row = _ref3.row;
  return "{ cell::" + column + "_" + row + " }";
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

var cell$1 = Object.freeze({
	spawn: spawn,
	default: spawn,
	column: column,
	row: row,
	cellString: cellString,
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// const FGT = require('graph-curry');
// export export const Cell = require('./cell');
var cellArray = function cellArray() {
  var cols = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var cells = [];

  for (var c = cols - 1; c >= 0; c--) {
    for (var r = rows - 1; r >= 0; r--) {
      cells.unshift(spawn(c, r));
    }
  }

  return cells;
};

var cIDs = function cIDs(grid) {
  return new Set(nodes(grid).map(Cell.column));
};
var rIDs = function rIDs(grid) {
  return new Set(nodes(grid).map(Cell.row));
};

var initCells = function initCells() {
  var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return fromElements.apply(undefined, _toConsumableArray(cellArray(c, r)));
};

var fromGrid = function fromGrid(grid) {
  return fromElements.apply(undefined, _toConsumableArray(cellArray(cIDs(grid).size, rIDs(grid).size)));
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
    return nodes(grid).find(Cell.isEquivalent({ column: column$$1, row: row$$1 }));
  };
};

var transferNodes = function transferNodes(src) {
  return function (dest) {
    return function () {
      return removeNodes(src).apply(undefined, arguments) && addNodes(dest).apply(undefined, arguments);
    };
  };
};

// module.exports = Object.assign({}, FGT.Graph, {
// nodesByColumn,
// nodeByPosition,
// nodesByPVector,
// nodesByNVector,
// nodesByRow,
// transferNodes,
// cIDs,
// rIDs,
// fromGrid,
// cellArray,
// initCells,
// });

var grid = Object.freeze({
	cellArray: cellArray,
	cIDs: cIDs,
	rIDs: rIDs,
	initCells: initCells,
	fromGrid: fromGrid,
	nodesByColumn: nodesByColumn,
	nodesByRow: nodesByRow,
	nodesByPVector: nodesByPVector,
	nodesByNVector: nodesByNVector,
	nodeByPosition: nodeByPosition,
	transferNodes: transferNodes
});

// const { Utils } = require('graph-curry');

// import * as Connections from './connections';
// import * as Traversals from './traversals';


var index$2 = Object.freeze({
	Cell: cell$1,
	Grid: grid
});

var require$$0 = ( index$2 && index$2['default'] ) || index$2;

var index = require$$0;

export default index;
//# sourceMappingURL=bundle.es6.js.map
