import 'jasmine-expect';
import grid from 'src/grid';
import { colComponents, colGraph, negComponents, negGraph, omniGraph,
   posComponents, posGraph, rowComponents, rowGraph, } from 'src/traversals';

const myGraph = grid(10, 10);

describe('graph representations', () => {
  describe('omniGraph', () => {
    it('returns a new Graph with all neighbors joined', () => {
      expect(omniGraph(myGraph) instanceof Map).toBeTrue();
    });
  });
  describe('colGraph', () => {
    it('returns a new Graph with only columns joined', () => {
      expect(colGraph(myGraph) instanceof Map).toBeTrue();
    });
  });
  describe('rowGraph', () => {
    it('returns a new Graph with only columns joined', () => {
      expect(rowGraph(myGraph) instanceof Map).toBeTrue();
    });
  });
  describe('posGraph', () => {
    it('returns a new Graph with only columns joined', () => {
      expect(posGraph(myGraph) instanceof Map).toBeTrue();
    });
  });
  describe('negGraph', () => {
    it('returns a new Graph with only columns joined', () => {
      expect(negGraph(myGraph) instanceof Map).toBeTrue();
    });
  });
  describe('colComponents', () => {
    it('returns the connected components in a column graph', () => {
      expect(colComponents(myGraph) instanceof Set).toBeTrue();
    });
  });
  describe('rowComponents', () => {
    it('returns the connected components in a column graph', () => {
      expect(rowComponents(myGraph) instanceof Set).toBeTrue();
    });
  });
  describe('posComponents', () => {
    it('returns the connected components in a column graph', () => {
      expect(posComponents(myGraph) instanceof Set).toBeTrue();
    });
  });
  describe('negComponents', () => {
    it('returns the connected components in a column graph', () => {
      expect(negComponents(myGraph) instanceof Set).toBeTrue();
    });
  });
});
