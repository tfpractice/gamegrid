import 'jasmine-expect';

import { column, copy, id, node, row, setCol, setRow, show, } from 'src/node';
const c00 = node(0, 0);
const c01 = node(0, 1);
const c22 = node(2, 2);
const c31 = node(3, 1);
const c33 = node(3, 3);
const myNodes = [ c00, c01, c22, c31, c33, ];

describe('node', () => {
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
    describe('setCol', () => {
      it('retuns the node with an updated column index', () => {
        expect(column(setCol(0)(c00))).toBe(0);
      });
    });
    describe('setRow', () => {
      it('retuns the row index', () => {
        expect(row(setRow(0)(c00))).toBe(0);
      });
    });
  
    describe('show(node)', () => {
      it('returns a string representation', () => {
        expect(show(c00)).toBeString();
      });
    });
  });
});
