import { Graph, } from 'graph-curry';
import { isNeighbor, sameCol, sameNVector, samePVector, sameRow, } from './node';
const { addEdges, nodes, } = Graph;

import { copy, } from './grid';

export const adjNodes = g => src => nodes(copy(g)).filter(isNeighbor(src));

export const rowAdj = g => src => adjNodes(g)(src).filter(sameRow(src));
export const colAdj = g => src => adjNodes(g)(src).filter(sameCol(src));
export const posAdj = g => src => adjNodes(g)(src).filter(samePVector(src));
export const negAdj = g => src => adjNodes(g)(src).filter(sameNVector(src));
export const allAdj = g => src => adjNodes(g)(src).filter(isNeighbor(src));

export const joinAdjBin = (grid, src) =>
  addEdges(grid)(src, 0)(...adjNodes(grid)(src));

export const joinColsBin = (grid, src) =>
  addEdges(grid)(src, 0)(...colAdj(grid)(src));

export const joinRowsBin = (grid, src) =>
  addEdges(grid)(src, 0)(...rowAdj(grid)(src));

export const joinPVectorsBin = (grid, src) =>
  addEdges(grid)(src, 0)(...posAdj(grid)(src));

export const joinNVectorsBin = (grid, src) =>
  addEdges(grid)(src, 0)(...negAdj(grid)(src));

export const joinAdj = grid => nodes(grid).reduce(joinAdjBin, grid);
export const joinCols = grid => nodes(grid).reduce(joinColsBin, grid);
export const joinRows = grid => nodes(grid).reduce(joinRowsBin, grid);
export const joinPVectors = grid => nodes(grid).reduce(joinPVectorsBin, grid);
export const joinNVectors = grid => nodes(grid).reduce(joinNVectorsBin, grid);
