import 'jasmine-expect';
import { Graph, } from 'graph-curry';
const { neighbors, nodes, } = Graph;

import { colGrid, colNodes, copy, findNode, genNodes, grid, joinGrid, negGrid,
   negNodes, posGrid, posNodes, rowGrid, rowNodes, } from 'src/grid';

const myGrid = grid(10, 10);
const centNodes = nodes(myGrid);

const myNodes = centNodes;
const [ n00, n01, n02, n03, n04, n05, n10, n11, n12, n13, n14, n15,
      n20, n21, n22, n23, n24, n25, n30, n31, n32, n33, n34, n35, ] = myNodes;

describe('Grid', () => {
  describe('genNodes', () => {
    it('returns a matrix of nodes wtih cNum and rNum attributes', () => {
      expect(genNodes(6, 6)).toBeArray();
    });
  });
  describe('grid({cNum, rNum})', () => {
    it('returns a grid{Map} of cNum and rNum cols and rows attributes', () => {
      expect(grid(6, 6) instanceof Map).toBeTrue();
    });
  });
  describe('fromGrid', () => {
    it('returns a copy of the grid  ', () => {
      expect(copy(grid(3, 3)) instanceof Map).toBeTrue();
    });
  });
  describe('colGrid', () => {
    it('creates edges between colAdj', () => {
      expect(neighbors(colGrid(myGrid))(n22).length).toBe(2);
    });
  });
  describe('rowGrid', () => {
    it('creates edges between rowAdj', () => {
      expect(neighbors(rowGrid(myGrid))(n22).length).toBe(2);
    });
  });
  describe('posGrid', () => {
    it('creates edges between posAdj', () => {
      expect(neighbors(posGrid(myGrid))(n22).length).toBe(2);
    });
  });
  describe('negGrid', () => {
    it('creates edges between negAdj', () => {
      expect(neighbors(negGrid(myGrid))(n22).length).toBe(2);
    });
  });
  describe('joinGrid', () => {
    it('creates edges between all adjacent nodes', () => {
      expect(joinGrid(myGrid) instanceof Map).toBeTrue();
    });
  });

  describe('nodes', () => {
    it('returns the nodes of the Grid', () => {
      expect(nodes(myGrid)).toBeArray();
    });
  });
  
  describe('colNodes', () => {
    it('returns the nodes of the Grid', () => {
      expect(colNodes(myGrid)(2)).toBeArray();
    });
  });
  describe('rowNodes', () => {
    it('returns the nodes of the Grid', () => {
      expect(rowNodes(myGrid)(2)).toBeArray();
    });
  });
  describe('findNode', () => {
    it('retrives a node with the specified row and column', () => {
      expect(findNode(myGrid)(0, 3)).toBeObject();
    });
  });
  describe('posNodes', () => {
    it('retrives a node with the specified row and column', () => {
      expect(posNodes(myGrid)(0, 3)).toBeArray();
    });
  });
  describe('negNodes', () => {
    it('retrives a node with the specified row and column', () => {
      expect(negNodes(myGrid)(0, 3)).toBeArray();
    });
  });
});
