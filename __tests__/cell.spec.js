import 'jasmine-expect';
import * as Cell from 'src/cell';

const c00 = Cell.spawn(0, 0);
const c01 = Cell.spawn(0, 1);
const c22 = Cell.spawn(2, 2);
const c31 = Cell.spawn(3, 1);
const c33 = Cell.spawn(3, 3);

describe('spawn', () => {
  it('is a function', () => {
    expect(Cell.spawn).toBeFunction();
  });
  describe('when given a row and column indices', () => {
    it('returns an Object with row and column properties', () => {
      expect(Cell.spawn(2, 3)).toBeObject();
      expect(c01.column).toBe(0);
      expect(c01.row).toBe(1);
    });
  });
});

describe('queries', () => {
  describe('row(cell)', () => {
    it('retuns the row index', () => {
      expect(Cell.row(c01)).toBe(1);
    });
  });
  describe('column(cell)', () => {
    it('retuns the column index', () => {
      expect(Cell.column(c00)).toBe(0);
    });
  });

  describe('cellString(cell)', () => {
    it('returns a string representation', () => {
      expect(Cell.cellString(c00)).toBeString();
    });
  });
});

describe('operators', () => {
  describe('colDiff', () => {
    it('returns the difference in column attributes', () => {
      expect(Cell.colDiff(c00)(c01)).toBe(0);
    });
  });
  describe('rowDiff', () => {
    it('returns the difference in column attributes', () => {
      expect(Math.abs(Cell.rowDiff(c00)(c01))).toBe(1);
    });
  });

  describe('tangent', () => {
    it('returns coldiff/rowDiff', () => {
      expect(Math.abs(Cell.tangent(c00)(c01))).toBe(Infinity);
    });
  });

  describe('angleBetween', () => {
    it('returns the angle between two nodes in radians', () => {
      expect(Math.abs(Cell.angleBetween(c00)(c01))).toBe(Math.PI / 2);
    });
  });
  describe('samePVector', () => {
    it('checks if the anglebetween two nodes is PI/4', () => {
      expect(Cell.samePVector(c22)(c33)).toBeTrue();
    });
  });
});

describe('comparitors', () => {
  describe('cAdj', () => {
    it('checks if the colDiff is < 2', () => {
      expect(Cell.cAdj(c00)(c01)).toBeTrue();
    });
  });
  describe('rAdj', () => {
    it('checks if the colDiff is < 2', () => {
      expect(Cell.rAdj(c00)(c01)).toBeTrue();
    });
  });

  describe('sameNVector', () => {
    it('checks if the anglebetween two nodes is PI/4', () => {
      expect(Cell.sameNVector(c31)(c22)).toBeTrue();
    });
  });

  describe('sameCol', () => {
    it('checks cell columns a difference of 0', () => {
      expect(Cell.sameCol(c00)(c01)).toBeTrue();
    });
  });
  describe('sameRow', () => {
    it('checks cell rows a difference of 0', () => {
      expect(Cell.sameRow(c00)(c01)).toBeFalse();
    });
  });
  describe('isNeighbor', () => {
    it('checks for colDiff and rowDiff <2', () => {
      expect(Cell.isNeighbor(c00)(c01)).toBeTrue();
    });
  });
  describe('isEquivalent', () => {
    it('checks if cells share both row and column', () => {
      expect(Cell.isEquivalent(c00)(c00)).toBeTrue();
    });
  });
  describe('xEquivalent', () => {
    it('checks if cells share both row and column', () => {
      expect(Cell.xEquivalent(c00)(c01)).toBeTrue();
    });
  });
});

// });/