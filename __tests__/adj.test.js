import 'jasmine-expect';
import { Graph, } from 'graph-curry';
import { node, } from 'src/node';
import { grid, } from 'src/grid';
import { allAdj, colAdj, negAdj, posAdj, rowAdj, } from 'src/adj';

const { neighbors, nodes, } = Graph;

const eGraph = grid();
const oGraph = grid();
const centGrid = grid(10, 10);
const centNodes = nodes(centGrid);
const evens = centNodes.filter((c, id) => id % 2 === 0);
const odds = centNodes.filter((c, id) => id % 2 !== 0);

const myNodes = centNodes;
const [ n00, n01, n02, n03, n04, n05, n10, n11, n12, n13, n14, n15,
      n20, n21, n22, n23, n24, n25, n30, n31, n32, n33, n34, n35, ] = myNodes;

describe('allAdj', () => {
  it('returns all neighboring nodes', () => {
    expect(allAdj(centGrid)(n11)).toBeArray();
    expect(allAdj(centGrid)(n11).length).toBe(5);
  });
});

describe('rowAdj ', () => {
  it('returns all neighboring nodes adjacent bby row', () => {
    expect(rowAdj(centGrid)(n11)).toBeArray();
    expect(rowAdj(centGrid)(n11).length).toBe(1);
  });
});
describe('colAdj ', () => {
  it('returns all neighboring nodes adjacent by column', () => {
    expect(colAdj(centGrid)(n11)).toBeArray();
    expect(colAdj(centGrid)(n11).length).toBe(2);
  });
});
describe('posAdj ', () => {
  it('returns all neighboring nodes adjacent bby row', () => {
    expect(posAdj(centGrid)(n11)).toBeArray();
    expect(posAdj(centGrid)(n11).length).toBe(1);
  });
});
describe('negAdj ', () => {
  it('returns all neighboring nodes adjacent by column', () => {
    expect(negAdj(centGrid)(n11)).toBeArray();
    expect(negAdj(centGrid)(n11).length).toBe(1);
  });
});
