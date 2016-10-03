describe('cell', function() {
	beforeAll(function() {
		console.log('\n.........cell Spec.........');
	});

	beforeEach(function() {
		c00 = cell.spawn(0, 0);
		c01 = cell.spawn(0, 1);
		c22 = cell.spawn(2, 2);
		c31 = cell.spawn(3, 1);
		c33 = cell.spawn(3, 3);
	});

	it('is a function', () => {
		expect(cell.spawn).toBeFunction();
	});
	describe('operators', () => {
		describe('row(cell)', () => {
			it('retuns the row index', () => {
				expect(cell.row(c01)).toBe(01);
			});
		});
		describe('column(cell)', () => {
			it('retuns the column index', () => {
				expect(cell.column(c00)).toBe(0);
			});
		});
		describe('cellString(cell)', () => {
			it('returns a string representation', () => {
				expect(cell.cellString(c00)).toBeString();
			});
		});
		describe('colDiff', () => {
			it('returns the difference in column attributes', () => {
				expect(cell.colDiff(c00)(c01)).toBe(0);
			});
		});
		describe('rowDiff', () => {
			it('returns the difference in column attributes', () => {
				expect(Math.abs(cell.rowDiff(c00)(c01))).toBe(1);
			});
		});
		describe('cAdj', () => {
			it('checks if the colDiff is < 2', () => {
				expect(cell.cAdj(c00)(c01)).toBeTrue();
			});
		});
		describe('rAdj', () => {
			it('checks if the colDiff is < 2', () => {
				expect(cell.rAdj(c00)(c01)).toBeTrue();
			});
		});
		describe('tangent', function() {
			it('returns coldiff/rowDiff', function() {
				expect(Math.abs(cell.tangent(c00)(c01))).toBe(Infinity);
			});
		});

		describe('angleBetween', () => {
			it('returns the angle between two nodes in radians', function() {
				expect(Math.abs(cell.angleBetween(c00)(c01))).toBe(Math.PI / 2);
			});
		});
		describe('samePVector', () => {
			it('checks if the anglebetween two nodes is PI/4', function() {
				expect(cell.samePVector(c22)(c33)).toBeTrue();
			});
		});
		describe('sameNVector', () => {
			it('checks if the anglebetween two nodes is PI/4', function() {
				expect(cell.sameNVector(c31)(c22)).toBeTrue();
			});
		});

		describe('sameColumn', () => {
			it('checks cell columns a difference of 0', () => {
				expect(cell.sameColumn(c00)(c01)).toBeTrue();
			});
		});
		describe('sameRow', () => {
			it('checks cell rows a difference of 0', () => {
				expect(cell.sameRow(c00)(c01)).toBeFalse();
			});
		});
		describe('isNeighbor', () => {
			it('checks for colDiff and rowDiff <2', () => {
				expect(cell.isNeighbor(c00)(c01)).toBeTrue();
			});
		});
		describe('isEquivalent', () => {
			it('checks if cells share both row and column', () => {
				expect(cell.isEquivalent(c00)(c00)).toBeTrue();
			});
		});
		describe('x_isEquivalent', () => {
			it('checks if cells share both row and column', () => {
				expect(cell.x_isEquivalent(c00)(c01)).toBeTrue();
			});
		});
	});
	describe('when given a row and column indices', () => {
		it('returns an Object with row and column properties', () => {
			expect(cell.spawn(2, 3)).toBeObject();
			expect(c01.column).toBe(0);
			expect(c01.row).toBe(1);
		});
	});
});