import { column, copy, id, import, node, row, } from './node';
const { atan, abs, PI } = Math;

// **colDiff** `::  Node-> Node -> Number`
// returns the difference of two nodes column properties

export const colDiff = n0 => n1 => column(n0) - column(n1);

// **rowDiff** `::  Node-> Node -> Number`
// returns the difference of two nodes row properties
export const rowDiff = n0 => n1 => row(n0) - row(n1);

// **tangent** `::  Node-> Node -> Number`
// returns the column difference to row difference ratio of two nodes
export const tangent = n0 => n1 => rowDiff(n0)(n1) / colDiff(n0)(n1);

// **angleBetween** `::  Node -> Node -> Number`
// returns a the angle between two nodes in radians
export const angleBetween = a => b => ((atan(tangent(a)(b)) % PI) + PI) % PI;

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

// **samePos** `::  Node -> Node -> Boolean`
// checks if two nodes share position
export const samePos = c0 => c1 => sameCol(c0)(c1) && sameRow(c0)(c1);

// **xEquivalent** `::  Node -> Node -> Boolean`
// checks if two nodes don't share position
export const diffPos = src => alt => !samePos(src)(alt);

// **cAdj** `::  Node -> Node -> Boolean`
// checks if two nodes lie on the same column
export const cAdj = n0 => n1 => abs(colDiff(n0)(n1)) < 2;

// **rAdj** `:: Node -> Node -> Boolean
// checks if two nodes lie on the same row
export const rAdj = n0 => n1 => abs(rowDiff(n0)(n1)) < 2;

// **isNeighbor** `::  Map<edge> ->  node  -> Map<edge>`
// checks if two different nodes are neighbors
export const isNeighbor = a => b => diffPos(a)(b) && cAdj(a)(b) && rAdj(a)(b);
