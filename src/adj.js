import { asSet, filter, map, spread, } from 'fenugreek-collections';
import { Graph, } from 'graph-curry';
import { isNeighbor, sameCol, sameNVector, samePVector, sameRow, } from './node';
const { nodes, } = Graph;

// **adj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all nodes
export const adj = g => src => filter(nodes(g))(isNeighbor(src));

// **rowAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all rows
export const rowAdj = g => src => filter(adj(g)(src))(sameRow(src));

// **colAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all columns
export const colAdj = g => src => filter(adj(g)(src))(sameCol(src));

// **posAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all positive diagonals
export const posAdj = g => src => filter(adj(g)(src))(samePVector(src));

// **negAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all negative diagonal
export const negAdj = g => src => filter(adj(g)(src))(sameNVector(src));
