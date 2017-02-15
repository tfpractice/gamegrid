import 'jasmine-expect';
import { node, } from 'src/node';
import { byAdj, byCol, byNVec, byPosition, byPVec, byRow, cIDs, colAdj,
generate, negAdj, posAdj, rIDs, rowAdj, } from 'src/filter';

const c00 = node(0, 0);
const c01 = node(0, 1);
const c22 = node(2, 2);
const c31 = node(3, 1);
const c33 = node(3, 3);
const myNodes = [ c00, c01, c22, c31, c33, ];

describe('filters', () => {
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
  
  describe('byAdj', () => {
    it('returns all neighboring nodes', () => {
      expect(byAdj(myNodes)(c22)).toBeArray();

      // expect(byAdj(myNodes)(c22).length).toBe(5);
    });
  });

  describe('rowAdj ', () => {
    it('returns all neighboring nodes adjacent bby row', () => {
      expect(rowAdj(myNodes)(c22)).toBeArray();

      // expect(rowAdj(myNodes)(c22).length).toBe(1);
    });
  });
  describe('colAdj ', () => {
    it('returns all neighboring nodes adjacent by column', () => {
      expect(colAdj(myNodes)(c22)).toBeArray();

      // expect(colAdj(myNodes)(c22).length).toBe(2);
    });
  });
  describe('posAdj ', () => {
    it('returns all neighboring nodes adjacent bby row', () => {
      expect(posAdj(myNodes)(c22)).toBeArray();

      // expect(posAdj(myNodes)(c22).length).toBe(1);
    });
  });
  describe('negAdj ', () => {
    it('returns all neighboring nodes adjacent by column', () => {
      expect(negAdj(myNodes)(c22)).toBeArray();

      // expect(negAdj(myNodes)(c22).length).toBe(1);
    });
  });
});
