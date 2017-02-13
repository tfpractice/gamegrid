import 'jasmine-expect';
import { grid, } from 'src/grid';
import { colComps, negComps, omniComps, posComps, rowComps, } from 'src/components';

const myGrid = grid(10, 10);

describe('Components', () => {
  describe('colComps', () => {
    it('returns the connected components in a column Grid', () => {
      expect(colComps(myGrid) instanceof Set).toBeTrue();
    });
  });
  describe('rowComps', () => {
    it('returns the connected components in a column Grid', () => {
      expect(rowComps(myGrid) instanceof Set).toBeTrue();
    });
  });
  describe('posComps', () => {
    it('returns the connected components in a column Grid', () => {
      expect(posComps(myGrid) instanceof Set).toBeTrue();
    });
  });
  describe('negComps', () => {
    it('returns the connected components in a column Grid', () => {
      expect(negComps(myGrid) instanceof Set).toBeTrue();
    });
  });
  describe('omniComps', () => {
    it('returns a set of all components in all directions', () => {
      expect(omniComps(myGrid) instanceof Set).toBeTrue();
    });
  });
});
