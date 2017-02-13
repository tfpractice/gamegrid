import { Components, Graph, } from 'graph-curry';
import { joinAdj, joinCols, joinNVectors, joinPVectors, joinRows, } from './connections';
const { fromElements, nodes } = Graph;

import { copy, } from './grid';
const { componentSet, } = Components;

export const omniGrid = grid => joinAdj(grid);
export const colGrid = grid => joinCols(grid);
export const rowGrid = grid => joinRows(grid);
export const posGrid = grid => joinPVectors(grid);
export const negGrid = grid => joinNVectors(grid);

export const colComponents = grid => componentSet(colGrid(grid));
export const rowComponents = grid => componentSet(rowGrid(grid));
export const posComponents = grid => componentSet(posGrid(grid));
export const negComponents = grid => componentSet(negGrid(grid));
