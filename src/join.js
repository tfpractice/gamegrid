import { Graph, } from 'graph-curry';
import { byAdj, colAdj, negAdj, posAdj, rowAdj, } from './filter';

const { addEdges, nodes, } = Graph;

// **joinAdj** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its neighbors
export const joinAdj = (g, n) => addEdges(g)(n, 0)(...byAdj(nodes(g))(n));

// **joinCols** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its column neighbors
export const joinCols = (g, n) => addEdges(g)(n, 0)(...colAdj(nodes(g))(n));

// **joinRows** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its row neighbors
export const joinRows = (g, n) => addEdges(g)(n, 0)(...rowAdj(nodes(g))(n));

// **joinPVectors** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its positive neighbors
export const joinPVectors = (g, n) => addEdges(g)(n, 0)(...posAdj(nodes(g))(n));

// **joinNVectors** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining a nodes and all its negative neighbors
export const joinNVectors = (g, n) => addEdges(g)(n, 0)(...negAdj(nodes(g))(n));
