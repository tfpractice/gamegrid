import { Components, } from 'graph-curry';
import { colGrid, negGrid, posGrid, rowGrid, } from './join';
const { componentSet, } = Components;

export const colComponents = grid => componentSet(colGrid(grid));
export const rowComponents = grid => componentSet(rowGrid(grid));
export const posComponents = grid => componentSet(posGrid(grid));
export const negComponents = grid => componentSet(negGrid(grid));
