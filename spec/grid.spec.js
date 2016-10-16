fdescribe('Grid', function() {
	beforeAll(function() {
		console.log('\n.........Grid Spec.........');
	});

	describe('spawn', () => {
		it('retunrn an object wtih cNum and rNum attributes', () => {
			// expect(Grid.spawn(3, 3) instanceof Map).toBeTrue();
		});
	});
	describe('initCells({cNum, rNum})', () => {
		it('returns a grid{Map} of cNum and rNum cols and rows attributes', () => {
			expect(Grid.initCells(6, 6) instanceof Map).toBeTrue();
		});
	});

	describe('fromGrid', () => {
		it('returns a copy of the grid  ', () => {
			expect(Grid.fromGrid(Grid.initCells(3, 3)) instanceof Map).toBeTrue();
		});
	});
});