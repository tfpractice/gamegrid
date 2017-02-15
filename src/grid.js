import { Graph, } from 'graph-curry';
import { column as getCol, row as getRow, isEquivalent, node, sameCol,
  sameNVector, samePVector, sameRow, } from './node';
import { joinAdj, joinCols, joinNVectors, joinPVectors, joinRows, } from './join';
const { graph, nodes, } = Graph;

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

// **grid** `::  (Number, Number) -> Map<edge>`
// returns a Map of edges with the specified number of columns and rows
export const grid = (c = 0, r = 0) => graph(...genNodes(c, r));

export const setNodes = (...nodes) => g => graph(...genNodes(c, r));

// **copy** `::  Map<edge> ->  node  -> Map<edge>`
// returns a copy of a grid
export const copy = grid => graph(...nodes(grid));

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

  // **joinGrid** `::  Map<edge>  -> Map<edge>`
  // returns a copy of a grid with edges joining all nodes with all their neighbors
export const joinGrid = grid => nodes(grid).reduce(joinAdj, grid);

  // **colGrid** `::  Map<edge> -> Map<edge>`
  // returns a copy of a grid with edges joining all nodes with all their column eighbors
export const colGrid = grid => nodes(grid).reduce(joinCols, grid);

  // **rowGrid** `::  Map<edge>  -> Map<edge>`
  // returns a copy of a grid with edges joining all nodes with all their row neighbors
export const rowGrid = grid => nodes(grid).reduce(joinRows, grid);

  // **posGrid** `::  Map<edge>  -> Map<edge>`
  // returns a copy of a grid with edges joining all nodes with all their positive neighbors
export const posGrid = grid => nodes(grid).reduce(joinPVectors, grid);

  // **negGrid** `::  (Map<edge>, node)  -> Map<edge>`
  // returns a copy of a grid with edges joining all nodes with all their negative neighbors
export const negGrid = grid => nodes(grid).reduce(joinNVectors, grid);
