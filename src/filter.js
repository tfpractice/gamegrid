import { filter, } from 'fenugreek-collections';
import { angleBetween, cAdj, colDiff, diffPos, isNeighbor, rAdj, rowDiff,
   sameCol, sameNVector, samePos, samePVector, sameRow, tangent, } from './compare';
   
// **byCol** `::  [Node] ->  Number  -> [Node]`
// returns an array of nodes  with the specified column id
export const byCol = nodes => (column = 0) => nodes.filter(sameCol({ column }));

// **byRow** `::  [Node] ->  Number  -> [Node]`
// returns an array of nodes  with the specified row id
export const byRow = nodes => (row = 0) => nodes.filter(sameRow({ row }));

// **byPVec** `:: [Node] ->  (Number, Number)  -> [Node]`
// returns an array of nodes on the specified postive diagonal
export const byPVec = nodes => (column = 0, row = 0) =>
    nodes.filter(samePVector({ column, row }));

// **byNVec** `:: [Node] ->  (Number, Number)  -> [Node]`
// returns an array of nodes on the specified negative diagonal
export const byNVec = nodes => (column = 0, row = 0) =>
     nodes.filter(sameNVector({ column, row }));

// **byPosition** `::  [Node] ->  node  -> Node`
// returns a node at the specified position
export const byPosition = nodes => (column = 0, row = 0) =>
     nodes.find(isEquivalent({ column, row }));

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
