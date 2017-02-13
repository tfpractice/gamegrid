import { Graph, } from 'graph-curry';
import { isNeighbor, sameCol, sameNVector, samePVector, sameRow, } from './node';
const { nodes, } = Graph;

export const allAdj = g => src => nodes(g).filter(isNeighbor(src));
export const rowAdj = g => src => allAdj(g)(src).filter(sameRow(src));
export const colAdj = g => src => allAdj(g)(src).filter(sameCol(src));
export const posAdj = g => src => allAdj(g)(src).filter(samePVector(src));
export const negAdj = g => src => allAdj(g)(src).filter(sameNVector(src));
