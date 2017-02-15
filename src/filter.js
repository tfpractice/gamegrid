import { asSet, filter, map, spread, } from 'fenugreek-collections';
import { column, row, } from './node';
import { angleBetween, cAdj, colDiff, diffPos, isNeighbor, rAdj, rowDiff,
   sameCol, sameNVector, samePos, samePVector, sameRow, tangent, } from './compare';
   
// **byCol** `::  [Node] ->  Number  -> [Node]`
// returns an array of nodes  with the specified column id
export const byCol = nodes => (column = 0) => filter(nodes)(sameCol({ column }));

// **byRow** `::  [Node] ->  Number  -> [Node]`
// returns an array of nodes  with the specified row id
export const byRow = nodes => (row = 0) => filter(nodes)(sameRow({ row }));

// **byPVec** `:: [Node] ->  (Number, Number)  -> [Node]`
// returns an array of nodes on the specified postive diagonal
export const byPVec = nodes => (column = 0, row = 0) =>
    filter(nodes)(samePVector({ column, row }));

// **byNVec** `:: [Node] ->  (Number, Number)  -> [Node]`
// returns an array of nodes on the specified negative diagonal
export const byNVec = nodes => (column = 0, row = 0) =>
     filter(nodes)(sameNVector({ column, row }));

// **byPosition** `::  [Node] ->  node  -> Node`
// returns a node at the specified position
export const byPosition = nodes => (column = 0, row = 0) =>
  spread(nodes).find(samePos({ column, row }));
  
// **cIDs** `::  [Node] -> Set<Number>`
// returns a Set of a grid's columns
export const cIDs = nodes => spread(asSet(map(nodes)(column)));

// **rIDs** `::  [Node] -> Set<Number>`
// returns a Set of a grid's rows
export const rIDs = nodes => spread(asSet(map(nodes)(row)));

// **genNodes** `::  (Number, Number) -> [Node]`
// returns an array of nodes the specified number of columns and rows
export const generate = (cols = 0, rows = 0) => {
  const nArr = [];

  for (let c = cols - 1; c >= 0; c--) {
    for (let r = rows - 1; r >= 0; r--) {
      nArr.unshift(node(c, r));
    }
  }

  return nArr;
};

// **byAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all nodes
export const byAdj = nodes => src => filter(nodes)(isNeighbor(src));

// **rowAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all rows
export const rowAdj = nodes => src => filter(byAdj(nodes)(src))(sameRow(src));

// **colAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all columns
export const colAdj = nodes => src => filter(byAdj(nodes)(src))(sameCol(src));

// **posAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all positive diagonals
export const posAdj = nodes => src => filter(byAdj(nodes)(src))(samePVector(src));

// **negAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all negative diagonal
export const negAdj = nodes => src => filter(byAdj(nodes)(src))(sameNVector(src));
