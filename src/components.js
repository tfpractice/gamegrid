import { Components, } from 'graph-curry';
import { colGrid, negGrid, posGrid, rowGrid, } from './join';
const { componentSet, } = Components;

// **colComponents** `::  Map<edge>  -> Set<edge>`
// returns a set of all columnn connected components
export const colComponents = grid => componentSet(colGrid(grid));

// **rowComponents** `::  Map<edge>  -> Set<edge>`
// returns a set of all row connected components
export const rowComponents = grid => componentSet(rowGrid(grid));

// **posComponents** `::  Map<edge>  -> Set<edge>`
// returns a set of all positive connected components
export const posComponents = grid => componentSet(posGrid(grid));

// **negComponents** `::  Map<edge>  -> Set<edge>`
// returns a set of all negative connected components
export const negComponents = grid => componentSet(negGrid(grid));
