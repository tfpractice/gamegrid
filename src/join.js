import { Graph, } from 'graph-curry';
import { allAdj, colAdj, negAdj, posAdj, rowAdj, } from './adj';

const { addEdges, nodes, } = Graph;

// **joinAdj** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its neighbors
export const joinAdj = (g, src) => addEdges(g)(src, 0)(...allAdj(g)(src));

// **joinCols** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its column neighbors
export const joinCols = (g, src) => addEdges(g)(src, 0)(...colAdj(g)(src));

// **joinRows** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its row neighbors
export const joinRows = (g, src) => addEdges(g)(src, 0)(...rowAdj(g)(src));

// **joinPVectors** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its positive neighbors
export const joinPVectors = (g, src) => addEdges(g)(src, 0)(...posAdj(g)(src));

// **joinNVectors** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its negative neighbors
export const joinNVectors = (g, src) => addEdges(g)(src, 0)(...negAdj(g)(src));

export const joinGrid = grid => nodes(grid).reduce(joinAdj, grid);
export const colGrid = grid => nodes(grid).reduce(joinCols, grid);
export const rowGrid = grid => nodes(grid).reduce(joinRows, grid);
export const posGrid = grid => nodes(grid).reduce(joinPVectors, grid);
export const negGrid = grid => nodes(grid).reduce(joinNVectors, grid);
