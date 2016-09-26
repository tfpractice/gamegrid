describe('cell', function() {
	beforeAll(function() {
		console.log('\n.........cell Spec.........');
	});

	beforeEach(function() {
		c00 = cell(0, 0);
		c01 = cell(0, 1);
	});

	it('is a function', function() {
		expect(cell).toBeFunction();
	});

	describe('operators', () => {
		describe('row(cell)', function() {
			it('retuns the row index', function() {
				expect(cell.row(c01)).toBe(01);
			});
		});

		describe('column(cell)', function() {
			it('retuns the column index', function() {
				expect(cell.column(c00)).toBe(0);
			});
		});

		describe('cellString(cell)', () => {
			it('returns a string representation', function() {
				expect(cell.cellString(c00)).toBeString();
			});
		});
		describe('colDiff', () => {
			it('returns the difference in column attributes', function() {
				expect(cell.colDiff(c00)(c01)).toBe(0);
			});
		});
		describe('rowDiff', () => {
			it('returns the difference in column attributes', function() {
				expect(cell.rowDiff(c00)(c01)).toBe(1);
			});
		});
		describe('cAdj', () => {
			it('checks if the colDiff is < 2', function() {
				expect(cell.cAdj(c00)(c01)).toBeTrue();
			});
		});
		describe('rAdj', () => {
			it('checks if the colDiff is < 2', function() {
				expect(cell.rAdj(c00)(c01)).toBeTrue();
			});
		});
		describe('sameColumn', () => {
			it('checks cell columns a difference of 0', function() {
				expect(cell.sameColumn(c00)(c01)).toBeTrue();
			});
		});
		describe('sameRow', () => {
			it('checks cell rows a difference of 0', function() {
				expect(cell.sameRow(c00)(c01)).toBeFalse();
			});
		});
		describe('isNeighbor', () => {
			it('checks for colDiff and rowDiff <2', function() {
				expect(cell.isNeighbor(c00)(c01)).toBeTrue();
			});
		});
		describe('isEquivalent', () => {
			it('checks if cells share both row and column', function() {
				expect(cell.isEquivalent(c00)(c00)).toBeTrue();
			});
		});
		describe('x_isEquivalent', () => {
			it('checks if cells share both row and column', function() {
				expect(cell.x_isEquivalent(c00)(c01)).toBeTrue();
			});
		});
	});
	describe('when given a row and column indices', () => {
		it('returns an Object with row and column properties', () => {
			expect(cell(2, 3)).toBeObject();
			expect(c01.column).toBe(0);
			expect(c01.row).toBe(1);
		});
	});
});