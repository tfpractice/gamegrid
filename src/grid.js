import { fromElements, nodes, } from 'graph-curry';
import { column as getCol, row as getRow, isEquivalent, node, sameCol,
sameNVector, samePVector, sameRow, } from './node';

export const genNodes = (cols = 0, rows = 0) => {
  const nodes = [];

  for (let c = cols - 1; c >= 0; c--) {
    for (let r = rows - 1; r >= 0; r--) {
      nodes.unshift(node(c, r));
    }
  }

  return nodes;
};

export const cIDs = grid => new Set(nodes(grid).map(getCol));
export const rIDs = grid => new Set(nodes(grid).map(getRow));

export const initNodes = (c = 0, r = 0) => fromElements(...genNodes(c, r));
export const fromGrid = grid => fromElements(...nodes(grid));

export const nodesByColumn = grid => (column = 0) =>
  nodes(grid).filter(sameCol({ column }));

export const nodesByRow = grid => (row = 0) =>
  nodes(grid).filter(sameRow({ row }));

export const nodesByPVector = grid => (column = 0, row = 0) =>
  nodes(grid).filter(samePVector({ column, row }));

export const nodesByNVector = grid => (column = 0, row = 0) =>
  nodes(grid).filter(sameNVector({ column, row }));

export const nodeByPosition = grid => (column = 0, row = 0) =>
  nodes(grid).find(isEquivalent({ column, row }));
export default initNodes;
