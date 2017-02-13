import 'jasmine-expect';
import { grid, } from 'src/grid';
import { colComponents, colGrid, negComponents, negGrid, omniGrid,
   posComponents, posGrid, rowComponents, rowGrid, } from 'src/traversals';

const myGrid = grid(10, 10);

describe('Grid representations', () => {
  describe('omniGrid', () => {
    it('returns a new Grid with all neighbors joined', () => {
      expect(omniGrid(myGrid) instanceof Map).toBeTrue();
    });
  });
  describe('colGrid', () => {
    it('returns a new Grid with only columns joined', () => {
      expect(colGrid(myGrid) instanceof Map).toBeTrue();
    });
  });
  describe('rowGrid', () => {
    it('returns a new Grid with only columns joined', () => {
      expect(rowGrid(myGrid) instanceof Map).toBeTrue();
    });
  });
  describe('posGrid', () => {
    it('returns a new Grid with only columns joined', () => {
      expect(posGrid(myGrid) instanceof Map).toBeTrue();
    });
  });
  describe('negGrid', () => {
    it('returns a new Grid with only columns joined', () => {
      expect(negGrid(myGrid) instanceof Map).toBeTrue();
    });
  });
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
