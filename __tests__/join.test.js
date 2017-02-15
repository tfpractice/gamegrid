import 'jasmine-expect';
import { Graph, } from 'graph-curry';
import { genNodes, grid, } from 'src/grid';
import { joinAdj, joinCols, joinNVectors, joinPVectors, joinRows, } from 'src/join';

const { neighbors, nodes, graph } = Graph;

const centGrid = graph(...genNodes(10, 10));
const centNodes = nodes(centGrid);

const myNodes = centNodes;
const [ n00, n01, n02, n03, n04, n05, n10, n11, n12, n13, n14, n15,
      n20, n21, n22, n23, n24, n25, n30, n31, n32, n33, n34, n35, ] = myNodes;

describe('join', () => {
  describe('joinAdj', () => {
    it('creates edges between a src node and all adjacent nodes', () => {
      expect(joinAdj(centGrid, n05) instanceof Map).toBeTrue();
    });
  });

  describe('joinCols', () => {
    it('creates edges between colAdj', () => {
      expect(neighbors(joinCols(centGrid, n22))(n22).length).toBe(2);
    });
  });
  
  describe('joinRows', () => {
    it('creates edges between rowAdj', () => {
      expect(neighbors(joinRows(centGrid, n22))(n22).length).toBe(2);
    });
  });
  describe('joinPVectors', () => {
    it('creates edges between posAdj', () => {
      expect(neighbors(joinPVectors(centGrid, n22))(n22).length).toBe(2);
    });
  });
  describe('joinNVectors', () => {
    it('creates edges between negAdj', () => {
      expect(neighbors(joinNVectors(centGrid, n22))(n22).length).toBe(2);
    });
  });
});
