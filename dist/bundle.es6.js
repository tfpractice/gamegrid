import 'graph-curry';

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
  var _column = _ref.column;
  return _column;
};
var row = function row(_ref2) {
  var _row = _ref2.row;
  return _row;
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

var cell = Object.freeze({
	spawn: spawn,
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

var _slicedToArray$2 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var tuple$1 = function tuple(val) {
	return function (key) {
		return [key, val];
	};
};
var triple$1 = function triple(val) {
	return function (key0) {
		return function (key1) {
			return [key0, key1, val];
		};
	};
};
var flatTuple = function flatTuple() {
	var v0 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	return function () {
		var v1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		return [v0].concat(_toConsumableArray$1(v1));
	};
};

var spread$2 = function spread() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	return [].concat(_toConsumableArray$1(coll));
};
var spreadK$2 = function spreadK() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	return [].concat(_toConsumableArray$1(coll.keys()));
};
var spreadV$2 = function spreadV() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	return [].concat(_toConsumableArray$1(coll.values()));
};
var spreadKV$2 = function spreadKV() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	return [].concat(_toConsumableArray$1(coll.entries()));
};

var addSet = function addSet() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
	var elem = arguments[1];
	return coll.add(elem);
};
var addMap$1 = function addMap() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	var _ref = arguments[1];

	var _ref2 = _slicedToArray$2(_ref, 2),
	    k = _ref2[0],
	    v = _ref2[1];

	return coll.set(k, v);
};
var rmColl = function rmColl() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	var elem = arguments[1];
	return coll.delete(elem) ? coll : coll;
};
var popElem = function popElem() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
	return function (el) {
		return rmColl(coll, el) && el;
	};
};
var popFirst = function popFirst() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
	return popElem(coll)(spread$2(coll).shift());
};

var commands = {
	spread: spread$2,
	spreadK: spreadK$2,
	spreadV: spreadV$2,
	spreadKV: spreadKV$2,
	tuple: tuple$1,
	triple: triple$1,
	flatTuple: flatTuple,
	addSet: addSet,
	addMap: addMap$1,
	rmColl: rmColl,
	popFirst: popFirst
};

var _slicedToArray$1 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var spread$1 = commands.spread;
var spreadK$1 = commands.spreadK;


var first = function first() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	return spread$1(coll).shift();
};
var last = function last() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	return spread$1(coll).pop();
};
var fromIndex = function fromIndex() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
	return function (index) {
		return spread$1(coll).slice(index, 1);
	};
};

var firstK = function firstK() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	return first(spreadK$1(coll));
};
var lastK = function lastK() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	return last(spreadK$1(coll));
};

var hasK$1 = function hasK() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	return function (key) {
		return coll.has(key);
	};
};
var x_hasK$1 = function x_hasK() {
	var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	return function (key) {
		return !coll.has(key);
	};
};
var hasKV = function hasKV(coll) {
	return function (_ref) {
		var _ref2 = _slicedToArray$1(_ref, 2),
		    key = _ref2[0],
		    val = _ref2[1];

		return coll.has(key);
	};
};
var x_hasKV = function x_hasKV(coll) {
	return function (_ref3) {
		var _ref4 = _slicedToArray$1(_ref3, 2),
		    key = _ref4[0],
		    val = _ref4[1];

		return !hasKV(coll)([key, val]);
	};
};

var queries = {
	first: first,
	last: last,
	fromIndex: fromIndex,
	firstK: firstK,
	lastK: lastK,
	hasK: hasK$1,
	x_hasK: x_hasK$1,
	hasKV: hasKV,
	x_hasKV: x_hasKV
};

var spread$3 = commands.spread;
var addMap$2 = commands.addMap;
var hasK$2 = queries.hasK;
var x_hasK$2 = queries.x_hasK;
var hasKV$1 = queries.hasKV;
var x_hasKV$1 = queries.x_hasKV;


var inter = function inter(c0) {
	return function (c1) {
		return spread$3(c0).filter(hasK$2(c1));
	};
};
var diff = function diff(c0) {
	return function (c1) {
		return spread$3(c0).filter(x_hasK$2(c1));
	};
};
var union = function union(c0) {
	return function (c1) {
		return spread$3(c0).concat(diff(c1)(c0));
	};
};

var mapInter = function mapInter() {
	var c0 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function () {
		var c1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
		return spread$3(c0).filter(hasKV$1(c1)).reduce(addMap$2, new Map());
	};
};

var mapDiff = function mapDiff() {
	var c0 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function () {
		var c1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
		return spread$3(c0).filter(x_hasKV$1(c1)).reduce(addMap$2, new Map());
	};
};

var mapUnion = function mapUnion() {
	var c0 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function () {
		var c1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
		return spread$3(mapDiff(c1)(c0)).reduce(addMap$2, new Map(c0));
	};
};

var uniteMap$1 = function uniteMap() {
	var c0 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function () {
		var c1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
		return spread$3(mapDiff(c1)(c0)).reduce(addMap$2, c0);
	};
};

var comparitors = { inter: inter, diff: diff, union: union, mapInter: mapInter, mapDiff: mapDiff, mapUnion: mapUnion, uniteMap: uniteMap$1 };

var _slicedToArray$3 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var spread$4 = commands.spread;
var spreadK$3 = commands.spreadK;
var spreadV$3 = commands.spreadV;
var spreadKV$3 = commands.spreadKV;
var last$1 = queries.last;


var redStr = function redStr() {
	var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
	var val = arguments[1];
	var id = arguments[2];
	var coll = arguments[3];
	return val === last$1(coll) ? str.concat(val, ' ') : str.concat(val, ' , ');
};
var collString = function collString(coll) {
	return spread$4(coll).reduce(redStr, '');
};
var kString = function kString(coll) {
	return spreadK$3(coll).reduce(redStr, '');
};
var vString = function vString(coll) {
	return spreadV$3(coll).reduce(redStr, '');
};
var kvString = function kvString(coll) {
	return spreadKV$3(coll).reduce(redStr, '');
};

var pathString = function pathString(path) {
	return ' { ' + spreadK$3(path).join(' => ') + ' }';
};
var edgeString = function edgeString(_ref) {
	var _ref2 = _slicedToArray$3(_ref, 2),
	    src = _ref2[0],
	    nbs = _ref2[1];

	return '{ Edge ' + src + ' >> [ ' + kString(nbs) + ' ] } ';
};

var componentString = function componentString(_ref3) {
	var _ref4 = _slicedToArray$3(_ref3, 2),
	    node = _ref4[0],
	    set = _ref4[1];

	return '{ component ' + src + ' >> [ ' + kString(nbs) + ' ] } ';
};

var graphString = function graphString(edges) {
	return spreadKV$3(edges).reduce(function (str, _ref5, id) {
		var _ref6 = _slicedToArray$3(_ref5, 2),
		    node = _ref6[0],
		    nabes = _ref6[1];

		return str + edgeString([node, nabes]);
	}, 'Showing Edges\n');
};

var showGraph$1 = function showGraph(_ref7) {
	var edges = _ref7.edges;
	return graphString(edges);
};

var strings = {
	redStr: redStr,
	collString: collString,
	kString: kString,
	vString: vString,
	kvString: kvString,
	pathString: pathString,
	edgeString: edgeString,
	componentString: componentString,
	graphString: graphString,
	showGraph: showGraph$1
};

var Queries = queries;
var Comparitors = comparitors;
var Commands = commands;
var Strings = strings;

var index$8 = { Queries: Queries, Comparitors: Comparitors, Strings: Strings, Commands: Commands };

var _slicedToArray$4 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Utils$3 = index$8;
var _Utils$Commands$1 = Utils$3.Commands;
var triple$2 = _Utils$Commands$1.triple;
var rmColl$1 = _Utils$Commands$1.rmColl;
var addMap$3 = _Utils$Commands$1.addMap;
var _Utils$Commands2$1 = Utils$3.Commands;
var spread$5 = _Utils$Commands2$1.spread;
var spreadK$4 = _Utils$Commands2$1.spreadK;
var flatTuple$1 = _Utils$Commands2$1.flatTuple;
var _Utils$Comparitors = Utils$3.Comparitors;
var mapDiff$1 = _Utils$Comparitors.mapDiff;


var nMap = function nMap() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function (src) {
		return new Map(edges.get(src));
	};
};
var nabes = function nabes() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function (src) {
		return spreadK$4(nMap(edges)(src));
	};
};
var addSrc$1 = function addSrc() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	var src = arguments[1];
	return addMap$3(edges, [src, nMap(edges)(src)]);
};

var addEdgeR$1 = function addEdgeR() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	var _ref = arguments[1];

	var _ref2 = _slicedToArray$4(_ref, 3),
	    src = _ref2[0],
	    nb = _ref2[1],
	    _ref2$ = _ref2[2],
	    wt = _ref2$ === undefined ? 0 : _ref2$;

	return edges.set(src, addMap$3(edges.get(src), [nb, wt])).set(nb, addMap$3(edges.get(nb), [src, wt]));
};

var rmEdge$1 = function rmEdge() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	var _ref3 = arguments[1];

	var _ref4 = _slicedToArray$4(_ref3, 3),
	    src = _ref4[0],
	    nb = _ref4[1],
	    _ref4$ = _ref4[2],
	    wt = _ref4$ === undefined ? 0 : _ref4$;

	return edges.set(src, rmColl$1(edges.get(src), nb)).set(nb, rmColl$1(edges.get(src), src));
};

var rmAdj$1 = function rmAdj() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	var src = arguments[1];
	return nabes(edges)(src).map(triple$2(0)(src)).reduce(rmEdge$1, edges);
};

var rmNode$1 = function rmNode() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	var src = arguments[1];
	return rmColl$1(rmAdj$1(edges, src), src);
};

var importEdge$1 = function importEdge() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();

	var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [, new Map()],
	    _ref6 = _slicedToArray$4(_ref5, 2),
	    src = _ref6[0],
	    nbs = _ref6[1];

	return spread$5(mapDiff$1(nbs)(edges.get(src))).map(flatTuple$1(src)).reduce(addEdgeR$1, addSrc$1(edges, src));
};

var reducers = {
	addSrc: addSrc$1,
	addEdgeR: addEdgeR$1,
	rmEdge: rmEdge$1,
	importEdge: importEdge$1,
	rmNode: rmNode$1,
	rmAdj: rmAdj$1
};

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Utils$2 = index$8;
var _Utils$Commands = Utils$2.Commands;
var spread = _Utils$Commands.spread;
var spreadK = _Utils$Commands.spreadK;
var _Utils$Commands2 = Utils$2.Commands;
var triple = _Utils$Commands2.triple;
var addMap = _Utils$Commands2.addMap;
var uniteMap = Utils$2.Comparitors.uniteMap;
var Reducers$1 = reducers;
var addEdgeR = Reducers$1.addEdgeR;
var addSrc = Reducers$1.addSrc;
var rmEdge = Reducers$1.rmEdge;
var rmAdj = Reducers$1.rmAdj;
var rmNode = Reducers$1.rmNode;
var importEdge = Reducers$1.importEdge;


var spawn$1 = function spawn() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return new Map(edges);
};
var fromElements$1 = function fromElements() {
	for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
		elements[_key] = arguments[_key];
	}

	return elements.reduce(addSrc, spawn$1());
};

var nodes$1 = function nodes() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return spreadK(edges);
};
var adj = function adj() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function (src) {
		return edges.get(src) || new Map();
	};
};
var neighbors = function neighbors() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function (src) {
		return nodes$1(adj(edges)(src));
	};
};
var contains = function contains() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function (node) {
		return edges.has(node);
	};
};
var isAdjacent = function isAdjacent() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function (src) {
		return function (nabe) {
			return contains(adj(edges)(src))(nabe);
		};
	};
};

var addNodes = function addNodes() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function () {
		for (var _len2 = arguments.length, srcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			srcs[_key2] = arguments[_key2];
		}

		return srcs.reduce(addSrc, edges);
	};
};
var removeNodes = function removeNodes() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function () {
		for (var _len3 = arguments.length, ns = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			ns[_key3] = arguments[_key3];
		}

		return ns.reduce(rmNode, edges);
	};
};

var addEdges$1 = function addEdges() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function (src) {
		var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		return function () {
			for (var _len4 = arguments.length, nabes = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				nabes[_key4] = arguments[_key4];
			}

			return nabes.map(triple(w)(src)).reduce(addEdgeR, edges);
		};
	};
};

var removeEdges = function removeEdges() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function (src) {
		return function () {
			for (var _len5 = arguments.length, nabes = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
				nabes[_key5] = arguments[_key5];
			}

			return nabes.map(triple(0)(src)).reduce(rmEdge, edges);
		};
	};
};

var mergeEdges = function mergeEdges() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function () {
		var altEdges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();

		spread(altEdges).reduce(importEdge, edges);
	};
};

var addEntry = function addEntry() {
	var nabes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function (_ref) {
		var _ref2 = _slicedToArray(_ref, 2),
		    n = _ref2[0],
		    _ref2$ = _ref2[1],
		    w = _ref2$ === undefined ? 0 : _ref2$;

		return addMap(nabes, [n, w]);
	};
};

var addNeighbor$1 = function addNeighbor() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function (src) {
		return function (n) {
			var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
			return addMap(adj(edges)(src), [n, w]);
		};
	};
};

var clearNeighbors = function clearNeighbors() {
	var edges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function () {
		for (var _len6 = arguments.length, srcs = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
			srcs[_key6] = arguments[_key6];
		}

		return srcs.reduce(rmAdj, edges);
	};
};

var copy = spawn$1;
var mergeNeighbors = uniteMap;
var graph = {
	spawn: spawn$1,
	contains: contains,
	nodes: nodes$1,
	adj: adj,
	copy: copy,
	isAdjacent: isAdjacent,
	addNodes: addNodes,
	removeEdges: removeEdges,
	removeNodes: removeNodes,
	neighbors: neighbors,
	addNeighbor: addNeighbor$1,
	addEdges: addEdges$1,
	addEdgeR: addEdgeR,
	addEntry: addEntry,
	clearNeighbors: clearNeighbors,
	mergeNeighbors: mergeNeighbors,
	mergeEdges: mergeEdges,
	fromElements: fromElements$1
};

var _slicedToArray$5 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Graph$1 = graph;
var addNodes$1 = Graph$1.addNodes;
var addEdges$2 = Graph$1.addEdges;
var removeNodes$1 = Graph$1.removeNodes;
var mergeEdges$1 = Graph$1.mergeEdges;


var addNodesAsync = function addNodesAsync(graph$$1) {
	return function () {
		for (var _len = arguments.length, additional = Array(_len), _key = 0; _key < _len; _key++) {
			additional[_key] = arguments[_key];
		}

		return new Promise(function (resolve) {
			addNodes$1(graph$$1).apply(undefined, additional);
			resolve(graph$$1);
		});
	};
};

var addEdgesAsync = function addEdgesAsync(graph$$1) {
	return function (n0) {
		var weight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		return function () {
			for (var _len2 = arguments.length, nodes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				nodes[_key2] = arguments[_key2];
			}

			return new Promise(function (resolve) {
				addEdges$2(graph$$1)(n0, weight).apply(undefined, nodes);
				resolve(graph$$1);
			});
		};
	};
};

var removeEdgeAsync = function removeEdgeAsync(graph$$1) {
	return function (src) {
		return function (nabe) {
			return new Promise(function (resolve, reject) {
				if (Graph$1.isAdjacent(graph$$1)(src)(nabe)) {
					removeEdge(graph$$1)(src)(nabe);
					resolve(graph$$1);
				} else {
					reject('no edge to delete');
				}
			});
		};
	};
};

var removeNodeAsync = function removeNodeAsync(graph$$1) {
	return function (exNode) {
		return new Promise(function (resolve) {
			removeNodes$1(graph$$1)(exNode);
			resolve(graph$$1);
		});
	};
};

var addNeighborAsync = function addNeighborAsync(graph$$1) {
	return function (src) {
		return function (_ref) {
			var _ref2 = _slicedToArray$5(_ref, 2),
			    nabe = _ref2[0],
			    wt = _ref2[1];

			return new Promise(function (resolve) {
				addNeighbor(graph$$1)(src)([nabe, wt]);
				resolve(graph$$1);
			});
		};
	};
};

// const importEdgeAsync = (graph) => ([src, nabes]) =>
// 	new Promise((resolve) => {
// 		addEntry(graph)([src, nabes]);
// 		resolve(graph);
// 	});
var mergeEdgesAsync = function mergeEdgesAsync(graph$$1) {
	return function (altGraph) {
		return new Promise(function (resolve) {
			mergeEdges$1(graph$$1)(altGraph);
			resolve(graph$$1);
		});
	};
};

var async_operators = {
	addNodesAsync: addNodesAsync,
	addEdgesAsync: addEdgesAsync,
	removeEdgeAsync: removeEdgeAsync,
	removeNodeAsync: removeNodeAsync,
	addNeighborAsync: addNeighborAsync,
	// importEdgeAsync,
	mergeEdgesAsync: mergeEdgesAsync
};

var _slicedToArray$6 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Utils$4 = index$8;
var _Utils$Commands$2 = Utils$4.Commands;
var spread$6 = _Utils$Commands$2.spread;
var spreadK$5 = _Utils$Commands$2.spreadK;
var spreadV$4 = _Utils$Commands$2.spreadV;
var popFirst$1 = _Utils$Commands$2.popFirst;
var _Utils$Commands2$2 = Utils$4.Commands;
var tuple$3 = _Utils$Commands2$2.tuple;
var addMap$4 = _Utils$Commands2$2.addMap;
var addSet$1 = _Utils$Commands2$2.addSet;
var _Utils$Queries$1 = Utils$4.Queries;
var lastK$1 = _Utils$Queries$1.lastK;
var hasK$3 = _Utils$Queries$1.hasK;
var _Utils$Comparitors$1 = Utils$4.Comparitors;
var diff$2 = _Utils$Comparitors$1.diff;
var mapDiff$2 = _Utils$Comparitors$1.mapDiff;


var pathVal = function pathVal() {
	var pred = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	return function () {
		var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
		return function () {
			var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
			return { pred: pred, length: length, weight: weight };
		};
	};
};

var addSrc$2 = function addSrc() {
	var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	return function (src) {
		return path.set(src, { pred: lastK$1(path), weight: 0, length: 1 });
	};
};

var initPath = function initPath(node) {
	return addSrc$2()(node);
};
var ptW = function ptW(_ref) {
	var _ref$weight = _ref.weight,
	    weight = _ref$weight === undefined ? 0 : _ref$weight;
	return weight;
};
var ptL = function ptL(_ref2) {
	var _ref2$length = _ref2.length,
	    length = _ref2$length === undefined ? 1 : _ref2$length;
	return length;
};
var lastVal = function lastVal(path) {
	return path.get(lastK$1(path));
};
var lastW = function lastW(path) {
	return ptW(lastVal(path));
};
var lastL = function lastL(path) {
	return ptL(lastVal(path));
};
var nextW = function nextW(path) {
	return function () {
		var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		return lastW(path) + w;
	};
};
var nextL = function nextL(path) {
	return lastL(path) ? lastL(path) + 1 : 1;
};

var nextPath = function nextPath() {
	var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	var _ref3 = arguments[1];

	var _ref4 = _slicedToArray$6(_ref3, 2),
	    n = _ref4[0],
	    _ref4$ = _ref4[1],
	    w = _ref4$ === undefined ? 0 : _ref4$;

	return path.set(n, pathVal(lastK$1(path))(nextL(path))(nextW(path)(w)));
};

var dfs = function dfs(edges) {
	return function (src) {
		var trav = function trav() {
			var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initPath(src);

			var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [lastK$1(path), 0],
			    _ref6 = _slicedToArray$6(_ref5, 2),
			    n = _ref6[0],
			    w = _ref6[1];

			return spread$6(mapDiff$2(edges.get(n))(path)).reduce(trav, nextPath(path, [n, w]));
		};

		return trav(initPath(src));
	};
};

var bfs = function bfs(edges) {
	return function (iNode) {
		var bVisit = function bVisit(bPath) {
			return function (bQueue) {
				var pred = popFirst$1(bQueue);
				var nextNabes = mapDiff$2(edges.get(pred))(bPath);
				spread$6(nextNabes).reduce(nextPath, bPath);
				spreadK$5(nextNabes).reduce(addSet$1, bQueue);
				return bQueue.size > 0 ? bVisit(bPath)(bQueue) : bPath;
			};
		};

		return bVisit(initPath(iNode))(new Set([iNode]));
	};
};

var dijkstra = function dijkstra(edges) {
	return function (iNode) {
		var reachables = bfs(edges)(iNode);
		var inspectQueue = new Set([iNode]);
		var solutionSet = initPath(iNode);
		while (inspectQueue.size > 0) {
			var pred = popFirst$1(inspectQueue);
			var nextNabes = edges.get(pred);

			var _solutionSet$get = solutionSet.get(pred),
			    dCount = _solutionSet$get.length,
			    dWeight = _solutionSet$get.weight;

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = nextNabes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _step$value = _slicedToArray$6(_step.value, 2),
					    nabe = _step$value[0],
					    nWeight = _step$value[1];

					var prevMap = reachables.get(nabe);
					var rCount = prevMap.length,
					    rWeight = prevMap.weight;

					var dMap = { pred: pred, length: dCount + 1, weight: dWeight + nWeight };
					var sMap = dWeight + nWeight < rWeight ? dMap : prevMap;
					if (!solutionSet.has(nabe)) {
						inspectQueue.add(nabe);
						solutionSet.set(nabe, sMap);
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}

		return solutionSet;
	};
};

var components = function components(edges) {
	var trav = function trav() {
		var comp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
		var node = arguments[1];
		return diff$2(spreadK$5(edges.get(node)))(comp).reduce(trav, comp.add(node));
	};

	var visitMap = function visitMap() {
		var mMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
		var node = arguments[1];
		return diff$2(trav(new Set(), node))(mMap).map(tuple$3(trav(new Set(), node))).reduce(addMap$4, mMap);
	};

	return spreadK$5(edges).reduce(visitMap, new Map());
};

var componentSet = function componentSet(edges) {
	return new Set(spreadV$4(components(edges)));
};
var pathBetween = function pathBetween(edges) {
	return function (n0) {
		return function (n1) {
			return hasK$3(components(edges).get(n1))(n0);
		};
	};
};

var traversals = {
	dfs: dfs,
	bfs: bfs,
	dijkstra: dijkstra,
	components: components,
	componentSet: componentSet,
	pathBetween: pathBetween
};

var Graph = graph;
var Reducers = reducers;
var Utils$1 = index$8;
var AsyncOps = async_operators;
var Traversals = traversals;

var index$6 = {
	Graph: Graph,
	Reducers: Reducers,
	Utils: Utils$1,
	AsyncOps: AsyncOps,
	Traversals: Traversals
};

var index$3 = index$6;



var index$5 = Object.freeze({
	default: index$3,
	__moduleExports: index$3
});

var require$$0 = ( index$5 && index$5['default'] ) || index$5;

var require$$1$3 = ( cell && cell['default'] ) || cell;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var FGT = require$$0;
var Cell = require$$1$3;
var _FGT$Graph = FGT.Graph;
var nodes = _FGT$Graph.nodes;
var addEdges = _FGT$Graph.addEdges;
var sameCol$1 = Cell.sameCol;
var sameRow$1 = Cell.sameRow;
var samePVector$1 = Cell.samePVector;
var sameNVector$1 = Cell.sameNVector;
var isNeighbor$1 = Cell.isNeighbor;


var adjNodes = function adjNodes(grid) {
	return function (src) {
		return nodes(grid).filter(isNeighbor$1(src));
	};
};

var rowAdj = function rowAdj(grid) {
	return function (src) {
		return adjNodes(grid)(src).filter(sameRow$1(src));
	};
};
var colAdj = function colAdj(grid) {
	return function (src) {
		return adjNodes(grid)(src).filter(sameCol$1(src));
	};
};
var posAdj = function posAdj(grid) {
	return function (src) {
		return adjNodes(grid)(src).filter(samePVector$1(src));
	};
};
var negAdj = function negAdj(grid) {
	return function (src) {
		return adjNodes(grid)(src).filter(sameNVector$1(src));
	};
};
var adjConnectR = function adjConnectR() {
	var grid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	var src = arguments[1];
	return addEdges(grid)(src, 0).apply(undefined, _toConsumableArray(adjNodes(grid)(src)));
};

var colConnectR = function colConnectR() {
	var grid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	var src = arguments[1];
	return addEdges(grid)(src, 0).apply(undefined, _toConsumableArray(colAdj(grid)(src)));
};

var rowConnectR = function rowConnectR() {
	var grid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	var src = arguments[1];
	return addEdges(grid)(src, 0).apply(undefined, _toConsumableArray(rowAdj(grid)(src)));
};

var posConnectR = function posConnectR() {
	var grid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	var src = arguments[1];
	return addEdges(grid)(src, 0).apply(undefined, _toConsumableArray(posAdj(grid)(src)));
};

var negConnectR = function negConnectR() {
	var grid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
	var src = arguments[1];
	return addEdges(grid)(src, 0).apply(undefined, _toConsumableArray(negAdj(grid)(src)));
};

var joinAdj = function joinAdj(grid) {
	return nodes(grid).reduce(adjConnectR, grid);
};
var joinCols = function joinCols(grid) {
	return nodes(grid).reduce(colConnectR, grid);
};
var joinRows = function joinRows(grid) {
	return nodes(grid).reduce(rowConnectR, grid);
};
var joinPVectors = function joinPVectors(grid) {
	return nodes(grid).reduce(posConnectR, grid);
};
var joinNVectors = function joinNVectors(grid) {
	return nodes(grid).reduce(negConnectR, grid);
};

var connections = _defineProperty({
	adjNodes: adjNodes,
	rowAdj: rowAdj,
	colAdj: colAdj,
	posAdj: posAdj,
	negAdj: negAdj,
	adjConnectR: adjConnectR,
	joinAdj: joinAdj,
	joinCols: joinCols,
	joinRows: joinRows,
	joinPVectors: joinPVectors,
	joinNVectors: joinNVectors
}, 'joinAdj', joinAdj);

function _toConsumableArray$2(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var FGT$1 = require$$0;
var Connex = connections;
var joinCols$1 = Connex.joinCols;
var joinRows$1 = Connex.joinRows;
var joinPVectors$1 = Connex.joinPVectors;
var joinNVectors$1 = Connex.joinNVectors;
var joinAdj$1 = Connex.joinAdj;
var componentSet$1 = FGT$1.Traversals.componentSet;
var _FGT$Graph$1 = FGT$1.Graph;
var fromElements$2 = _FGT$Graph$1.fromElements;
var nodes$2 = _FGT$Graph$1.nodes;


var omniGraph = function omniGraph(grid) {
    return joinAdj$1(fromElements$2.apply(undefined, _toConsumableArray$2(nodes$2(grid))));
};
var colGraph = function colGraph(grid) {
    return joinCols$1(fromElements$2.apply(undefined, _toConsumableArray$2(nodes$2(grid))));
};
var rowGraph = function rowGraph(grid) {
    return joinRows$1(fromElements$2.apply(undefined, _toConsumableArray$2(nodes$2(grid))));
};
var posGraph = function posGraph(grid) {
    return joinPVectors$1(fromElements$2.apply(undefined, _toConsumableArray$2(nodes$2(grid))));
};
var negGraph = function negGraph(grid) {
    return joinNVectors$1(fromElements$2.apply(undefined, _toConsumableArray$2(nodes$2(grid))));
};

var colComponents = function colComponents(grid) {
    return componentSet$1(colGraph(grid));
};
var rowComponents = function rowComponents(grid) {
    return componentSet$1(rowGraph(grid));
};
var posComponents = function posComponents(grid) {
    return componentSet$1(posGraph(grid));
};
var negComponents = function negComponents(grid) {
    return componentSet$1(negGraph(grid));
};

var traversals$2 = Object.assign({}, FGT$1.Traversals, {
    omniGraph: omniGraph,
    colGraph: colGraph,
    rowGraph: rowGraph,
    posGraph: posGraph,
    negGraph: negGraph,
    colComponents: colComponents,
    rowComponents: rowComponents,
    posComponents: posComponents,
    negComponents: negComponents
});

function _toConsumableArray$3(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var FGT$2 = require$$0;
var Cell$1 = require$$1$3;
var _FGT$Graph$2 = FGT$2.Graph;
var nodes$3 = _FGT$Graph$2.nodes;
var addNodes$2 = _FGT$Graph$2.addNodes;
var removeNodes$2 = _FGT$Graph$2.removeNodes;
var fromElements$3 = _FGT$Graph$2.fromElements;
var sameCol$2 = Cell$1.sameCol;
var sameRow$2 = Cell$1.sameRow;
var samePVector$2 = Cell$1.samePVector;
var sameNVector$2 = Cell$1.sameNVector;


var cellArray = function cellArray() {
	var cols = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	var cells = [];
	for (var c = cols - 1; c >= 0; c--) {
		for (var r = rows - 1; r >= 0; r--) {
			cells.unshift(Cell$1.spawn(c, r));
		}
	}

	return cells;
};

var cIDs = function cIDs(grid) {
	return new Set(nodes$3(grid).map(Cell$1.column));
};
var rIDs = function rIDs(grid) {
	return new Set(nodes$3(grid).map(Cell$1.row));
};

var initCells = function initCells() {
	var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	return fromElements$3.apply(undefined, _toConsumableArray$3(cellArray(c, r)));
};

var fromGrid = function fromGrid(grid) {
	return fromElements$3.apply(undefined, _toConsumableArray$3(cellArray(cIDs(grid).size, rIDs(grid).size)));
};

var nodesByColumn = function nodesByColumn(grid) {
	return function () {
		var column = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		return nodes$3(grid).filter(sameCol$2({ column: column }));
	};
};

var nodesByRow = function nodesByRow(grid) {
	return function () {
		var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		return nodes$3(grid).filter(sameRow$2({ row: row }));
	};
};

var nodesByPVector = function nodesByPVector(grid) {
	return function () {
		var column = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		return nodes$3(grid).filter(samePVector$2({ column: column, row: row }));
	};
};

var nodesByNVector = function nodesByNVector(grid) {
	return function () {
		var column = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		return nodes$3(grid).filter(sameNVector$2({ column: column, row: row }));
	};
};

var nodeByPosition = function nodeByPosition(grid) {
	return function () {
		var column = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		return nodes$3(grid).find(Cell$1.isEquivalent({ column: column, row: row }));
	};
};

var transferNodes = function transferNodes(src) {
	return function (dest) {
		return function () {
			return removeNodes$2(src).apply(undefined, arguments) && addNodes$2(dest).apply(undefined, arguments);
		};
	};
};

var grid = Object.assign({}, FGT$2.Graph, {
	nodesByColumn: nodesByColumn,
	nodeByPosition: nodeByPosition,
	nodesByPVector: nodesByPVector,
	nodesByNVector: nodesByNVector,
	nodesByRow: nodesByRow,
	transferNodes: transferNodes,
	cIDs: cIDs,
	rIDs: rIDs,
	fromGrid: fromGrid,
	cellArray: cellArray,
	initCells: initCells
});

var _require = require('graph-curry');
var Utils = _require.Utils;

exports.Utils = Utils;



var index$2 = Object.freeze({
	Cell: cell
});

var require$$0$5 = ( index$2 && index$2['default'] ) || index$2;

var index = require$$0$5;

export default index;
//# sourceMappingURL=bundle.es6.js.map
