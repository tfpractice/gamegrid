import { addBinMap, addBinSet, flattenBin, } from 'fenugreek-collections';
import { Components, } from 'graph-curry';
import { colGrid, negGrid, posGrid, rowGrid, } from './grid';
import { callBin, callOn, isFunc, pipeline, } from './utils';
const { componentSet, } = Components;

// **colComps** `::  Map<edge>  -> Set<edge>`
// returns a set of all columnn connected components

export const colComps = grid => componentSet(colGrid(grid));

// **rowComps** `::  Map<edge>  -> Set<edge>`
// returns a set of all row connected components
export const rowComps = grid => componentSet(rowGrid(grid));

// **posComps** `::  Map<edge>  -> Set<edge>`
// returns a set of all positive connected components
export const posComps = grid => componentSet(posGrid(grid));

// **negComps** `::  Map<edge>  -> Set<edge>`
// returns a set of all negative connected components
export const negComps = grid => componentSet(negGrid(grid));

// **omniComps** `::  Map<edge>  -> Set<edge>`
// returns a set of all connected components
export const omniComps = grid => [ colComps, rowComps, posComps, negComps, ]
  .map(callOn(grid)).reduce(flattenBin, []).reduce(addBinSet, new Set);

// **splitComps** `::  Map<edge>  -> Set<edge>`
// returns a map of all connected components by direction
export const splitComps = g => [[ 'row', rowComps(g) ], [ 'col', colComps(g) ],
 [ 'pos', posComps(g) ], [ 'neg', negComps(g) ]].reduce(addBinMap, new Map);
