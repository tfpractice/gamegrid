import 'jasmine-expect';
import { node, } from 'src/node';
import { angleBetween, cAdj, colDiff, diffPos, isNeighbor, rAdj, rowDiff,
   sameCol, sameNVector, samePos, samePVector, sameRow, tangent, } from 'src/compare';

const c00 = node(0, 0);
const c01 = node(0, 1);
const c22 = node(2, 2);
const c31 = node(3, 1);
const c33 = node(3, 3);
const myNodes = [ c00, c01, c22, c31, c33, ];

describe('compare', () => {
  describe('colDiff', () => {
    it('returns the difference in column attributes', () => {
      expect(colDiff(c00)(c01)).toBe(0);
    });
  });
  describe('rowDiff', () => {
    it('returns the difference in column attributes', () => {
      expect(Math.abs(rowDiff(c00)(c01))).toBe(1);
    });
  });
  
  describe('tangent', () => {
    it('returns coldiff/rowDiff', () => {
      expect(Math.abs(tangent(c00)(c01))).toBe(Infinity);
    });
  });
  
  describe('angleBetween', () => {
    it('returns the angle between two nodes in radians', () => {
      expect(Math.abs(angleBetween(c00)(c01))).toBe(Math.PI / 2);
    });
  });
  describe('samePVector', () => {
    it('checks if the anglebetween two nodes is PI/4', () => {
      expect(samePVector(c22)(c33)).toBeTrue();
    });
  });
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
  describe('samePos', () => {
    it('checks if nodes share both row and column', () => {
      expect(samePos(c00)(c00)).toBeTrue();
    });
  });
  describe('diffPos', () => {
    it('checks if nodes share both row and column', () => {
      expect(diffPos(c00)(c01)).toBeTrue();
    });
  });
});
