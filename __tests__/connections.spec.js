import 'jasmine-expect';
import { neighbors, nodes, } from 'game-grid';
import * as gg from 'game-grid';
console.log('gg', gg);
import grid from 'src/grid';
import { adjNodes, allAdj, colAdj, joinAdj, joinAdjBin, joinCols, joinColsBin,
  joinNVectors, joinNVectorsBin, joinPVectors, joinPVectorsBin, joinRows,
  joinRowsBin, negAdj, posAdj, rowAdj, } from 'src/connections';

const eGraph = grid();
const oGraph = grid();
const centGrid = grid(10, 10);
const centNodes = nodes(centGrid);
const evens = centNodes.filter((c, id) => id % 2 === 0);
const odds = centNodes.filter((c, id) => id % 2 !== 0);
const myNodes = centNodes;
const [ n00, n01, n02, n03, n04, n05, n10, n11, n12, n13, n14, n15,
      n20, n21, n22, n23, n24, n25, n30, n31, n32, n33, n34, n35, ] = myNodes;

describe('adjNodes/adjNodes', () => {
  it('returns all neighboring nodes', () => {
    expect(adjNodes(centGrid)(n11)).toBeArray();
  });
});

describe('rowAdj ', () => {
  it('returns all neighboring nodes adjacent bby row', () => {
    expect(rowAdj(centGrid)(n11)).toBeArray();
  });
});
describe('colAdj ', () => {
  it('returns all neighboring nodes adjacent by column', () => {
    expect(colAdj(centGrid)(n11)).toBeArray();
  });
});
describe('posAdj ', () => {
  it('returns all neighboring nodes adjacent bby row', () => {
    expect(posAdj(centGrid)(n11)).toBeArray();
  });
});
describe('negAdj ', () => {
  it('returns all neighboring nodes adjacent by column', () => {
    expect(negAdj(centGrid)(n11)).toBeArray();
  });
});

describe('joinAdj', () => {
  it('creates edges between all adjacent nodes', () => {
    expect(joinAdj(centGrid) instanceof Map).toBeTrue();
  });
});
describe('joinCols', () => {
  it('creates edges between colAdj', () => {
    const centralNabes = neighbors(joinCols(centGrid))(n22);

    expect(centralNabes.length).toBe(2);
  });
});
describe('joinRows', () => {
  it('creates edges between rowAdj', () => {
    const centralNabes = neighbors(joinRows(centGrid))(n22);

    expect(centralNabes.length).toBe(2);
  });
});
describe('joinPVectors', () => {
  it('creates edges between posAdj', () => {
    const centralNabes = neighbors(joinPVectors(centGrid))(n22);

    expect(centralNabes.length).toBe(2);
  });
});
describe('joinNVectors', () => {
  it('creates edges between negAdj', () => {
    const centralNabes = neighbors(joinNVectors(centGrid))(n22);

    expect(centralNabes.length).toBe(2);
  });
});
describe('joinAdj', () => {
  it('creates edges between all adjacent nodes', () => {
    const centralNabes = neighbors(joinAdj(centGrid))(n22);

    expect(centralNabes.length).toBe(8);
  });
});
