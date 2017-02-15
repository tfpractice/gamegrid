import { asSet, spread, } from 'fenugreek-collections';
const { atan, abs, PI } = Math;

// **column** `::  Node ->  Number`
// returns a node's column property
export const column = ({ column }) => column;

// **row** `::  Node ->  Number`
// returns a node's row property
export const row = ({ row }) => row;

// **nodeString** `::  Node ->  String`
// returns a string representation of a node
export const nodeString = ({ column, row }) => `{ node::${column}_${row} }`;

// **node** `::  (Number, Number) -> Node`
// returns an object with column and row properties
export const node = (column = null, row = null) =>
 ({ column, row, toString: () => nodeString({ column, row }) });

 // **copy** `::  Node -> Node`
 // returns a copy of a node
export const copy = n => node(column(n), row(n));

// **colDiff** `::  Node-> Node -> Number`
// returns the difference of two nodes column properties
export const colDiff = ({ column: c0 }) => ({ column: c1 }) => (c0 - c1);

// **rowDiff** `::  Node-> Node -> Number`
// returns the difference of two nodes row properties
export const rowDiff = ({ row: r0 }) => ({ row: r1 }) => (r0 - r1);

// **tangent** `::  Node-> Node -> Number`
// returns the column difference to row difference ratio of two nodes
export const tangent = n0 => n1 => rowDiff(n0)(n1) / colDiff(n0)(n1);

// **angleBetween** `::  Node -> Node -> Number`
// returns a the angle between two nodes in radians
export const angleBetween = n0 => n1 => ((atan(tangent(n0)(n1)) % PI) + PI) % PI;

// **sameCol** `:: Node -> Node -> Boolean`
// checks for equality between two nodes column properties
export const sameCol = n0 => n1 => abs(colDiff(n0)(n1)) === 0;

// **sameRow** `::  Node -> Node -> Boolean`
// checks for equality between two nodes row properties
export const sameRow = n0 => n1 => abs(rowDiff(n0)(n1)) === 0;

// **samePVector** `::  Node -> Node -> Boolean``
// checks if two nodes lie on the same positive diagonal
export const samePVector = n0 => n1 => angleBetween(n0)(n1) === PI * 0.25;

// **sameNVector** `::  Node -> Node -> Boolean`
// checks if two nodes lie on the same negative diagonal
export const sameNVector = n0 => n1 => angleBetween(n0)(n1) === PI * 0.75;

// **cAdj** `::  Node -> Node -> Boolean`
// checks if two nodes lie on the same column
export const cAdj = n0 => n1 => abs(colDiff(n0)(n1)) < 2;

// **rAdj** `:: Node -> Node -> Boolean
// checks if two nodes lie on the same row
export const rAdj = n0 => n1 => abs(rowDiff(n0)(n1)) < 2;

// **isEquivalent** `::  Node -> Node -> Boolean`
// checks if two nodes share position
export const isEquivalent = c0 => c1 => sameCol(c0)(c1) && sameRow(c0)(c1);

// **xEquivalent** `::  Node -> Node -> Boolean`
// checks if two nodes don't share position
export const xEquivalent = src => alt => !isEquivalent(src)(alt);

// **isNeighbor** `::  Map<edge> ->  node  -> Map<edge>`
// checks if two different nodes are neighbors
export const isNeighbor = n0 => n1 =>
 xEquivalent(n0)(n1) && cAdj(n0)(n1) && rAdj(n0)(n1);

 // **cIDs** `::  [Node] -> Set<Number>`
 // returns a Set of a grid's columns
export const cIDs = nodes => spread(asSet(nodes.map(column)));

 // **rIDs** `::  [Node] -> Set<Number>`
 // returns a Set of a grid's rows
export const rIDs = nodes => spread(asSet(nodes.map(row)));
