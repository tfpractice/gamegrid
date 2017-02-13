import { Graph, } from 'graph-curry';
import { column as getCol, row as getRow, isEquivalent, node, sameCol,
  sameNVector, samePVector, sameRow, } from './node';

const { fromElements, nodes, } = Graph;

// **genNodes** `::  (Number, Number) -> [Node]`
// returns an array of nodes the specified number of columns and rows
export const genNodes = (cols = 0, rows = 0) => {
  const nArr = [];
  
  for (let c = cols - 1; c >= 0; c--) {
    for (let r = rows - 1; r >= 0; r--) {
      nArr.unshift(node(c, r));
    }
  }
  
  return nArr;
};

// **cIDs** `::  Map<edge> -> Set<Number>`
// returns a Set of a grid's columns
export const cIDs = grid => new Set(nodes(grid).map(getCol));

// **rIDs** `::  Map<edge> -> Set<Number>`
// returns a Set of a grid's rows
export const rIDs = grid => new Set(nodes(grid).map(getRow));

// **grid** `::  (Number, Number) -> Map<edge>`
// returns a Map of edges with the specified number of columns and rows
export const grid = (c = 0, r = 0) => fromElements(...genNodes(c, r));

// **copy** `::  Map<edge> ->  node  -> Map<edge>`
// returns a copy of a grid
export const copy = grid => fromElements(...nodes(grid));

// **nodesByColumn** `::  Map<edge> ->  Number  -> [Node]`
// returns an array of nodes  with the specified column id
export const nodesByColumn = grid => (column = 0) =>
  nodes(grid).filter(sameCol({ column }));

// **nodesByRow** `::  Map<edge> ->  Number  -> [Node]`
// returns an array of nodes  with the specified row id
export const nodesByRow = grid => (row = 0) =>
  nodes(grid).filter(sameRow({ row }));

// **nodesByPVector** `:: Map<edge> ->  (Number, Number)  -> [Node]`
// returns an array of nodes on the specified postive diagonal
export const nodesByPVector = grid => (column = 0, row = 0) =>
  nodes(grid).filter(samePVector({ column, row }));

// **nodesByNVector** `:: Map<edge> ->  (Number, Number)  -> [Node]`
// returns an array of nodes on the specified negative diagonal
export const nodesByNVector = grid => (column = 0, row = 0) =>
  nodes(grid).filter(sameNVector({ column, row }));

// **nodeByPosition** `::  Map<edge> ->  node  -> Node`
// returns a node at the specified position
export const nodeByPosition = grid => (column = 0, row = 0) =>
  nodes(grid).find(isEquivalent({ column, row }));
