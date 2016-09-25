describe('cell', function() {
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

	});
	describe('when given a row and column indices', () => {
		it('returns an Object with row and column properties', () => {
			expect(cell(2, 3)).toBeObject();
			expect(c01.column).toBe(0);
			expect(c01.row).toBe(1);
		});

	});
});