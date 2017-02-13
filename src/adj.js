import { Graph, } from 'graph-curry';
import { isNeighbor, sameCol, sameNVector, samePVector, sameRow, } from './node';
const { nodes, } = Graph;

// **allAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all nodes
export const allAdj = g => src => nodes(g).filter(isNeighbor(src));

// **rowAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all rows
export const rowAdj = g => src => allAdj(g)(src).filter(sameRow(src));

// **colAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all columns
export const colAdj = g => src => allAdj(g)(src).filter(sameCol(src));

// **posAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all positive diagonals
export const posAdj = g => src => allAdj(g)(src).filter(samePVector(src));

// **negAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all negative diagonal
export const negAdj = g => src => allAdj(g)(src).filter(sameNVector(src));
