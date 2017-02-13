import 'jasmine-expect';
import { Graph, } from 'graph-curry';

import { grid, } from 'src/grid';
import { joinAdj, joinAdjBin, joinCols, joinColsBin, joinNVectors,
   joinNVectorsBin, joinPVectors, joinPVectorsBin, joinRows, joinRowsBin,
 } from 'src/join';
 
const { neighbors, nodes, } = Graph;

const centGrid = grid(10, 10);
const centNodes = nodes(centGrid);

const myNodes = centNodes;
const [ n00, n01, n02, n03, n04, n05, n10, n11, n12, n13, n14, n15,
      n20, n21, n22, n23, n24, n25, n30, n31, n32, n33, n34, n35, ] = myNodes;

describe('join', () => {
  describe('joinAdjBin', () => {
    it('creates edges between a src node and all adjacent nodes', () => {
      expect(joinAdjBin(centGrid, n05) instanceof Map).toBeTrue();
    });
  }); describe('joinAdj', () => {
    it('creates edges between all adjacent nodes', () => {
      expect(joinAdj(centGrid) instanceof Map).toBeTrue();
    });
  });
  describe('joinColsBin', () => {
    it('creates edges between colAdj', () => {
      expect(neighbors(joinColsBin(centGrid, n22))(n22).length).toBe(2);
    });
  }); describe('joinCols', () => {
    it('creates edges between colAdj', () => {
      expect(neighbors(joinCols(centGrid))(n22).length).toBe(2);
    });
  });
  describe('joinRowsBin', () => {
    it('creates edges between rowAdj', () => {
      expect(neighbors(joinRowsBin(centGrid, n22))(n22).length).toBe(2);
    });
  }); describe('joinRows', () => {
    it('creates edges between rowAdj', () => {
      expect(neighbors(joinRows(centGrid))(n22).length).toBe(2);
    });
  });
  describe('joinPVectorsBin', () => {
    it('creates edges between posAdj', () => {
      expect(neighbors(joinPVectorsBin(centGrid, n22))(n22).length).toBe(2);
    });
  }); describe('joinPVectors', () => {
    it('creates edges between posAdj', () => {
      expect(neighbors(joinPVectors(centGrid))(n22).length).toBe(2);
    });
  });
  describe('joinNVectorsBin', () => {
    it('creates edges between negAdj', () => {
      expect(neighbors(joinNVectorsBin(centGrid, n22))(n22).length).toBe(2);
    });
  });
  describe('joinNVectors', () => {
    it('creates edges between negAdj', () => {
      expect(neighbors(joinNVectors(centGrid))(n22).length).toBe(2);
    });
  });
});
