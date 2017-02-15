import 'jasmine-expect';
import { node, } from 'src/node';
import { byCol, byNVec, byPosition, byPVec, byRow, cIDs, generate, rIDs, } from 'src/filter';

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
});
