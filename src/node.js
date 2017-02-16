import { asSet, spread, } from 'fenugreek-collections';
const { atan, abs, PI } = Math;
const init = { column: null, row: null, id: '' };

// **column** `::  Node ->  Number`
// returns a node's column property
export const column = ({ column } = init) => column;

// **row** `::  Node ->  Number`
// returns a node's row property
export const row = ({ row } = init) => row;

// **id** `::  Node ->  String`
// returns a node's row property
export const id = ({ id } = init) => id;

// **show** `::  Node ->  String`
// returns a string representation of a node
export const show = ({ column, row } = init) => `<c${column}_r${row}>`;

// **node** `::  (Number, Number) -> Node`
// returns an object with column and row properties
export const node = (column = null, row = null) =>
 ({ column, row, id: show({ column, row }), });

 // **copy** `::  Node -> Node`
 // returns a copy of a node
export const copy = n => node(column(n), row(n));

//
// // **colDiff** `::  Node-> Node -> Number`
// // returns the difference of two nodes column properties
// export const colDiff = ({ column: c0 }) => ({ column: c1 }) => (c0 - c1);
//
// // **rowDiff** `::  Node-> Node -> Number`
// // returns the difference of two nodes row properties
// export const rowDiff = ({ row: r0 }) => ({ row: r1 }) => (r0 - r1);
//
// // **tangent** `::  Node-> Node -> Number`
// // returns the column difference to row difference ratio of two nodes
// export const tangent = n0 => n1 => rowDiff(n0)(n1) / colDiff(n0)(n1);
//
// // **angleBetween** `::  Node -> Node -> Number`
// // returns a the angle between two nodes in radians
// export const angleBetween = n0 => n1 => ((atan(tangent(n0)(n1)) % PI) + PI) % PI;
//
// // **sameCol** `:: Node -> Node -> Boolean`
// // checks for equality between two nodes column properties
// export const sameCol = n0 => n1 => abs(colDiff(n0)(n1)) === 0;
//
// // **sameRow** `::  Node -> Node -> Boolean`
// // checks for equality between two nodes row properties
// export const sameRow = n0 => n1 => abs(rowDiff(n0)(n1)) === 0;
//
// // **samePVector** `::  Node -> Node -> Boolean``
// // checks if two nodes lie on the same positive diagonal
// export const samePVector = n0 => n1 => angleBetween(n0)(n1) === PI * 0.25;
//
// // **sameNVector** `::  Node -> Node -> Boolean`
// // checks if two nodes lie on the same negative diagonal
// export const sameNVector = n0 => n1 => angleBetween(n0)(n1) === PI * 0.75;
//
// // **cAdj** `::  Node -> Node -> Boolean`
// // checks if two nodes lie on the same column
// export const cAdj = n0 => n1 => abs(colDiff(n0)(n1)) < 2;
//
// // **rAdj** `:: Node -> Node -> Boolean
// // checks if two nodes lie on the same row
// export const rAdj = n0 => n1 => abs(rowDiff(n0)(n1)) < 2;
//
// // **isEquivalent** `::  Node -> Node -> Boolean`
// // checks if two nodes share position
// export const isEquivalent = c0 => c1 => sameCol(c0)(c1) && sameRow(c0)(c1);
//
// // **xEquivalent** `::  Node -> Node -> Boolean`
// // checks if two nodes don't share position
// export const xEquivalent = src => alt => !isEquivalent(src)(alt);
//
// // **isNeighbor** `::  Map<edge> ->  node  -> Map<edge>`
// // checks if two different nodes are neighbors
// export const isNeighbor = n0 => n1 =>
//  xEquivalent(n0)(n1) && cAdj(n0)(n1) && rAdj(n0)(n1);
//
//  // **cIDs** `::  [Node] -> Set<Number>`
//  // returns a Set of a grid's columns
// export const cIDs = nodes => spread(asSet(nodes.map(column)));
//
//  // **rIDs** `::  [Node] -> Set<Number>`
//  // returns a Set of a grid's rows
// export const rIDs = nodes => spread(asSet(nodes.map(row)));
//
// // **byColumn** `::  Map<edge> ->  Number  -> [Node]`
// // returns an array of nodes  with the specified column id
// export const byCol = nodes => (column = 0) => nodes.filter(sameCol({ column }));
//
// // **byRow** `::  Map<edge> ->  Number  -> [Node]`
// // returns an array of nodes  with the specified row id
// export const byRow = nodes => (row = 0) => nodes.filter(sameRow({ row }));
//
// // **byPVec** `:: Map<edge> ->  (Number, Number)  -> [Node]`
// // returns an array of nodes on the specified postive diagonal
// export const byPVec = nodes => (column = 0, row = 0) =>
//  nodes.filter(samePVector({ column, row }));
//
// // **byNVec** `:: Map<edge> ->  (Number, Number)  -> [Node]`
// // returns an array of nodes on the specified negative diagonal
// export const byNVec = nodes => (column = 0, row = 0) =>
//   nodes.filter(sameNVector({ column, row }));
//
// // **byPosition** `::  Map<edge> ->  node  -> Node`
// // returns a node at the specified position
// export const byPosition = nodes => (column = 0, row = 0) =>
//   nodes.find(isEquivalent({ column, row }));
//
//   // **genNodes** `::  (Number, Number) -> [Node]`
//   // returns an array of nodes the specified number of columns and rows
// export const generate = (cols = 0, rows = 0) => {
//   const nArr = [];
//
//   for (let c = cols - 1; c >= 0; c--) {
//     for (let r = rows - 1; r >= 0; r--) {
//       nArr.unshift(node(c, r));
//     }
//   }
//
//   return nArr;
// };
