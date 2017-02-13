import { Graph, } from 'graph-curry';
import { allAdj, colAdj, negAdj, posAdj, rowAdj, } from './adj';

const { addEdges, nodes, } = Graph;

export const joinAdjBin = (grid, src) =>
  addEdges(grid)(src, 0)(...allAdj(grid)(src));

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
