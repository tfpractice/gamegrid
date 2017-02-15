import 'jasmine-expect';
import { angleBetween, byCol, byNVec, byPosition, byPVec, byRow, cAdj,
  cIDs, colDiff, column, copy, isEquivalent, isNeighbor, node, nodeString, rAdj, rIDs,
   row, rowDiff, sameCol, sameNVector, samePVector, sameRow, tangent, xEquivalent, } from 'src/node';

const c00 = node(0, 0);
const c01 = node(0, 1);
const c22 = node(2, 2);
const c31 = node(3, 1);
const c33 = node(3, 3);
const myNodes = [ c00, c01, c22, c31, c33, ];

describe('node', () => {
  it('is a function', () => {
    expect(node).toBeFunction();
  });
  describe('when given a row and column indices', () => {
    it('returns an Object with row and column properties', () => {
      expect(node(2, 3)).toBeObject();
      expect(c01.column).toBe(0);
      expect(c01.row).toBe(1);
    });
  });
});
describe('copy', () => {
  it('returns a copy of the node with the same properties', () => {
    expect(copy(node(2, 3))).toBeObject();
    expect(copy(c01).column).toBe(0);
    expect(copy(c01).row).toBe(1);
  });
});
describe('queries', () => {
  describe('row(node)', () => {
    it('retuns the row index', () => {
      expect(row(c01)).toBe(1);
    });
  });
  describe('column(node)', () => {
    it('retuns the column index', () => {
      expect(column(c00)).toBe(0);
    });
  });
  
  describe('nodeString(node)', () => {
    it('returns a string representation', () => {
      expect(nodeString(c00)).toBeString();
    });
  });
});

describe('comparitors', () => {
  describe('cAdj', () => {
    it('checks if the colDiff is < 2', () => {
      expect(cAdj(c00)(c01)).toBeTrue();
    });
  });
  describe('rAdj', () => {
    it('checks if the colDiff is < 2', () => {
      expect(rAdj(c00)(c01)).toBeTrue();
    });
  });
  
  describe('sameNVector', () => {
    it('checks if the anglebetween two nodes is PI/4', () => {
      expect(sameNVector(c31)(c22)).toBeTrue();
    });
  });
  
  describe('sameCol', () => {
    it('checks node columns a difference of 0', () => {
      expect(sameCol(c00)(c01)).toBeTrue();
    });
  });
  describe('sameRow', () => {
    it('checks node rows a difference of 0', () => {
      expect(sameRow(c00)(c01)).toBeFalse();
    });
  });
  describe('isNeighbor', () => {
    it('checks for colDiff and rowDiff <2', () => {
      expect(isNeighbor(c00)(c01)).toBeTrue();
    });
  });
  describe('isEquivalent', () => {
    it('checks if nodes share both row and column', () => {
      expect(isEquivalent(c00)(c00)).toBeTrue();
    });
  });
  describe('xEquivalent', () => {
    it('checks if nodes share both row and column', () => {
      expect(xEquivalent(c00)(c01)).toBeTrue();
    });
  });
  describe('cIDs', () => {
    it('returns an array of columns', () => {
      expect(cIDs(myNodes)).toBeArray();
    });
  });
  describe('rIDs', () => {
    it('returns an array of columns', () => {
      expect(rIDs(myNodes)).toBeArray();
    });
  });
  describe('byCol', () => {
    it('filters nodes by Column', () => {
      expect(byCol(myNodes)(0)).toBeArray();
    });
  });
  describe('byRow', () => {
    it('filters nodes by Column', () => {
      expect(byRow(myNodes)(0)).toBeArray();
    });
  });
  describe('byPVec', () => {
    it('filters nodes by Column', () => {
      expect(byPVec(myNodes)(0, 0)).toBeArray();
    });
  });
  describe('byNVec', () => {
    it('filters nodes by Column', () => {
      expect(byNVec(myNodes)(0, 0)).toBeArray();
    });
  });
  describe('byPosition', () => {
    it('returns the node with the given position', () => {
      expect(byPosition(myNodes)(0, 0)).toBeObject();
    });
  });
});

// });/
