import { Graph, } from 'graph-curry';
import { allAdj, colAdj, negAdj, posAdj, rowAdj, } from './adj';

const { addEdges, nodes, } = Graph;

export const joinAdj = (g, src) => addEdges(g)(src, 0)(...allAdj(g)(src));
export const joinCols = (g, src) => addEdges(g)(src, 0)(...colAdj(g)(src));
export const joinRows = (g, src) => addEdges(g)(src, 0)(...rowAdj(g)(src));
export const joinPVectors = (g, src) => addEdges(g)(src, 0)(...posAdj(g)(src));
export const joinNVectors = (g, src) => addEdges(g)(src, 0)(...negAdj(g)(src));

export const joinGrid = grid => nodes(grid).reduce(joinAdj, grid);
export const colGrid = grid => nodes(grid).reduce(joinCols, grid);
export const rowGrid = grid => nodes(grid).reduce(joinRows, grid);
export const posGrid = grid => nodes(grid).reduce(joinPVectors, grid);
export const negGrid = grid => nodes(grid).reduce(joinNVectors, grid);
