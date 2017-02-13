import 'jasmine-expect';
import { grid, } from 'src/grid';
import { allComponents, colComponents, negComponents, posComponents, rowComponents, } from 'src/traversals';

const myGrid = grid(10, 10);

describe('Components', () => {
  describe('colComponents', () => {
    it('returns the connected components in a column Grid', () => {
      expect(colComponents(myGrid) instanceof Set).toBeTrue();
    });
  });
  describe('rowComponents', () => {
    it('returns the connected components in a column Grid', () => {
      expect(rowComponents(myGrid) instanceof Set).toBeTrue();
    });
  });
  describe('posComponents', () => {
    it('returns the connected components in a column Grid', () => {
      expect(posComponents(myGrid) instanceof Set).toBeTrue();
    });
  });
  describe('negComponents', () => {
    it('returns the connected components in a column Grid', () => {
      expect(negComponents(myGrid) instanceof Set).toBeTrue();
    });
  });
});
