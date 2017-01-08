import { componentSet, fromElements, nodes, } from 'graph-curry';
import { joinAdj, joinCols, joinNVectors, joinPVectors, joinRows, } from './connections';

export const omniGraph = grid => joinAdj(fromElements(...nodes(grid)));
export const colGraph = grid => joinCols(fromElements(...nodes(grid)));
export const rowGraph = grid => joinRows(fromElements(...nodes(grid)));
export const posGraph = grid => joinPVectors(fromElements(...nodes(grid)));
export const negGraph = grid => joinNVectors(fromElements(...nodes(grid)));

export const colComponents = grid => componentSet(colGraph(grid));
export const rowComponents = grid => componentSet(rowGraph(grid));
export const posComponents = grid => componentSet(posGraph(grid));
export const negComponents = grid => componentSet(negGraph(grid));
