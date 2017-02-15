import 'jasmine-expect';
import { Graph, } from 'graph-curry';
const { nodes } = Graph;

import { copy, genNodes, grid, } from 'src/grid';

// import { cIDs, copy, genNodes, grid, nodeByPosition,
//   nodesByColumn, nodesByNVector, nodesByPVector, nodesByRow, rIDs, } from 'src/grid';

const myGrid = grid(10, 10);

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

  // describe('nodes', () => {
  //   it('returns the nodes of the Grid', () => {
  //     expect(nodes(myGrid)).toBeArray();
  //   });
  // });

  // describe('nodesByColumn', () => {
  //   it('returns the nodes of the Grid', () => {
  //     expect(nodesByColumn(myGrid)(2)).toBeArray();
  //   });
  // });
  // describe('nodesByRow', () => {
  //   it('returns the nodes of the Grid', () => {
  //     expect(nodesByRow(myGrid)(2)).toBeArray();
  //   });
  // });
  // describe('nodeByPosition', () => {
  //   it('retrives a node with the specified row and column', () => {
  //     expect(nodeByPosition(myGrid)(0, 3)).toBeObject();
  //   });
  // });
  // describe('nodesByPVector', () => {
  //   it('retrives a node with the specified row and column', () => {
  //     expect(nodesByPVector(myGrid)(0, 3)).toBeArray();
  //   });
  // });
  // describe('nodesByNVector', () => {
  //   it('retrives a node with the specified row and column', () => {
  //     expect(nodesByNVector(myGrid)(0, 3)).toBeArray();
  //   });
  // });
  // describe('cIDs', () => {
  //   it('returns a set of column IDs', () => {
  //     expect(cIDs(myGrid) instanceof Set).toBeTrue();
  //   });
  // });
  // describe('rIDs', () => {
  //   it('returns a set of column IDs', () => {
  //     expect(rIDs(myGrid) instanceof Set).toBeTrue();
  //   });
  // });
});
