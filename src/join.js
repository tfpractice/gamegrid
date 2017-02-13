import { Graph, } from 'graph-curry';
import { allAdj, colAdj, negAdj, posAdj, rowAdj, } from './adj';

const { addEdges, nodes, } = Graph;

export const joinAdj = (grid, src) =>
  addEdges(grid)(src, 0)(...allAdj(grid)(src));

export const joinCols = (grid, src) =>
  addEdges(grid)(src, 0)(...colAdj(grid)(src));

export const joinRows = (grid, src) =>
  addEdges(grid)(src, 0)(...rowAdj(grid)(src));

export const joinPVectors = (grid, src) =>
  addEdges(grid)(src, 0)(...posAdj(grid)(src));

export const joinNVectors = (grid, src) =>
  addEdges(grid)(src, 0)(...negAdj(grid)(src));

export const joinGrid = grid => nodes(grid).reduce(joinAdj, grid);
export const colGrid = grid => nodes(grid).reduce(joinCols, grid);
export const rowGrid = grid => nodes(grid).reduce(joinRows, grid);
export const posGrid = grid => nodes(grid).reduce(joinPVectors, grid);
export const negGrid = grid => nodes(grid).reduce(joinNVectors, grid);
