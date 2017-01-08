import { addEdges, nodes, } from 'graph-curry';
import { isNeighbor, sameCol, sameNVector, samePVector, sameRow, } from './node';

export const adjNodes = grid => src => nodes(grid).filter(isNeighbor(src));

export const rowAdj = grid => src => adjNodes(grid)(src).filter(sameRow(src));
export const colAdj = grid => src => adjNodes(grid)(src).filter(sameCol(src));
export const posAdj = grid => src => adjNodes(grid)(src).filter(samePVector(src));
export const negAdj = grid => src => adjNodes(grid)(src).filter(sameNVector(src));
export const allAdj = grid => src => adjNodes(grid)(src).filter(isNeighbor(src));

export const joinAdjBin = (grid = new Map, src) =>
  addEdges(grid)(src, 0)(...adjNodes(grid)(src));

export const joinColsBin = (grid = new Map, src) =>
  addEdges(grid)(src, 0)(...colAdj(grid)(src));

export const joinRowsBin = (grid = new Map, src) =>
  addEdges(grid)(src, 0)(...rowAdj(grid)(src));

export const joinPVectorsBin = (grid = new Map, src) =>
  addEdges(grid)(src, 0)(...posAdj(grid)(src));

export const joinNVectorsBin = (grid = new Map, src) =>
  addEdges(grid)(src, 0)(...negAdj(grid)(src));

export const joinAdj = grid => nodes(grid).reduce(joinAdjBin, grid);
export const joinCols = grid => nodes(grid).reduce(joinColsBin, grid);
export const joinRows = grid => nodes(grid).reduce(joinRowsBin, grid);
export const joinPVectors = grid => nodes(grid).reduce(joinPVectorsBin, grid);
export const joinNVectors = grid => nodes(grid).reduce(joinNVectorsBin, grid);
