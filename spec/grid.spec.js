describe('cell', function() {
	beforeEach(function() {});

	describe('gridData', () => {
		it('retunrn an object wtih columns and rows attributes', function() {
			expect(grid.gridData(3, 3)).toBeObject();
		});
	});

});