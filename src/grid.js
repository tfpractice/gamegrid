import { Graph, } from 'graph-curry';
import { byCol, byNVec, byPosition, byPVec, byRow, } from './filter';
import { joinAdj, joinCols, joinNVectors, joinPVectors, joinRows, } from './join';
import { node, } from './node';

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

// **copy** `::  Map<edge> ->  node  -> Map<edge>`
// returns a copy of a grid
export const copy = grid => graph(...nodes(grid));

// **colNodes** `::  Map<edge> ->  Number  -> [Node]`
// returns an array of nodes  with the specified column id
export const colNodes = grid => (c = 0) => byCol(nodes(grid))(c);

// **rowNodes** `::  Map<edge> ->  Number  -> [Node]`
// returns an array of nodes  with the specified row id
export const rowNodes = grid => (r = 0) => byRow(nodes(grid))(r);

// **posNodestor** `:: Map<edge> ->  (Number, Number)  -> [Node]`
// returns an array of nodes on the specified postive diagonal
export const posNodes = grid => (c = 0, r = 0) => byPVec(nodes(grid))(c, r);

// **negNodestor** `:: Map<edge> ->  (Number, Number)  -> [Node]`
// returns an array of nodes on the specified negative diagonal
export const negNodes = grid => (c = 0, r = 0) => byNVec(nodes(grid))(c, r);

// **findNode** `::  Map<edge> ->  node  -> Node`
// returns a node at the specified position
export const findNode = grid => (c = 0, r = 0) => byPosition(nodes(grid))(c, r);

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
