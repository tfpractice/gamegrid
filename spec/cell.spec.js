describe('cell', function() {
	beforeEach(function() {
		c00 = cell(0, 0);
		c01 = cell(0, 1);
	});
	it('is a function', function() {
		expect(cell).toBeFunction();
	});
});