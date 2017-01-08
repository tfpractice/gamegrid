import 'jasmine-expect';
import node, * as Node from 'src/node';

const c00 = node(0, 0);
const c01 = node(0, 1);
const c22 = node(2, 2);
const c31 = node(3, 1);
const c33 = node(3, 3);

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

describe('queries', () => {
  describe('row(node)', () => {
    it('retuns the row index', () => {
      expect(Node.row(c01)).toBe(1);
    });
  });
  describe('column(node)', () => {
    it('retuns the column index', () => {
      expect(Node.column(c00)).toBe(0);
    });
  });

  describe('nodeString(node)', () => {
    it('returns a string representation', () => {
      expect(Node.nodeString(c00)).toBeString();
    });
  });
});

describe('operators', () => {
  describe('colDiff', () => {
    it('returns the difference in column attributes', () => {
      expect(Node.colDiff(c00)(c01)).toBe(0);
    });
  });
  describe('rowDiff', () => {
    it('returns the difference in column attributes', () => {
      expect(Math.abs(Node.rowDiff(c00)(c01))).toBe(1);
    });
  });

  describe('tangent', () => {
    it('returns coldiff/rowDiff', () => {
      expect(Math.abs(Node.tangent(c00)(c01))).toBe(Infinity);
    });
  });

  describe('angleBetween', () => {
    it('returns the angle between two nodes in radians', () => {
      expect(Math.abs(Node.angleBetween(c00)(c01))).toBe(Math.PI / 2);
    });
  });
  describe('samePVector', () => {
    it('checks if the anglebetween two nodes is PI/4', () => {
      expect(Node.samePVector(c22)(c33)).toBeTrue();
    });
  });
});

describe('comparitors', () => {
  describe('cAdj', () => {
    it('checks if the colDiff is < 2', () => {
      expect(Node.cAdj(c00)(c01)).toBeTrue();
    });
  });
  describe('rAdj', () => {
    it('checks if the colDiff is < 2', () => {
      expect(Node.rAdj(c00)(c01)).toBeTrue();
    });
  });

  describe('sameNVector', () => {
    it('checks if the anglebetween two nodes is PI/4', () => {
      expect(Node.sameNVector(c31)(c22)).toBeTrue();
    });
  });

  describe('sameCol', () => {
    it('checks node columns a difference of 0', () => {
      expect(Node.sameCol(c00)(c01)).toBeTrue();
    });
  });
  describe('sameRow', () => {
    it('checks node rows a difference of 0', () => {
      expect(Node.sameRow(c00)(c01)).toBeFalse();
    });
  });
  describe('isNeighbor', () => {
    it('checks for colDiff and rowDiff <2', () => {
      expect(Node.isNeighbor(c00)(c01)).toBeTrue();
    });
  });
  describe('isEquivalent', () => {
    it('checks if nodes share both row and column', () => {
      expect(Node.isEquivalent(c00)(c00)).toBeTrue();
    });
  });
  describe('xEquivalent', () => {
    it('checks if nodes share both row and column', () => {
      expect(Node.xEquivalent(c00)(c01)).toBeTrue();
    });
  });
});

// });/
