describe('grid', function() {
	beforeAll(function() {
		console.log('\n.........grid Spec.........');
	});

	beforeEach(function() {});

	describe('spawn', () => {
		it('retunrn an object wtih cNum and rNum attributes', () => {
			expect(grid.spawn(3, 3)).toBeObject();
		});
	});
	describe('initCells({cNum, rNum})', () => {
		it('retunrn an object wtih cNum and rNum attributes', () => {
			expect(grid.initCells(6, 6)).toBeArray();
		});
	});

	describe('makeGrid', () => {
		it('returns a graph of the cells ', () => {});
	});
});