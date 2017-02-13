import { Components, } from 'graph-curry';
import { colGrid, negGrid, posGrid, rowGrid, } from './join';
const { componentSet, } = Components;

// **colComponents** `::  Map<edge>  -> Set<edge>`
// returns a set of all columnn connected components
export const colComps = grid => componentSet(colGrid(grid));

// **rowComponents** `::  Map<edge>  -> Set<edge>`
// returns a set of all row connected components
export const rowComps = grid => componentSet(rowGrid(grid));

// **posComponents** `::  Map<edge>  -> Set<edge>`
// returns a set of all positive connected components
export const posComps = grid => componentSet(posGrid(grid));

// **negComponents** `::  Map<edge>  -> Set<edge>`
// returns a set of all negative connected components
export const negComps = grid => componentSet(negGrid(grid));

// export const omniComps = grid =>
