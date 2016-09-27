describe('grid', function() {
	beforeAll(function() {
		console.log('\n.........grid Spec.........');
	});

	beforeEach(function() {
		g66 = grid.state(6, 6);
		myGrid = grid.makeGrid(g66);
	});

	describe('state', () => {
		it('retunrn an object wtih cNum and rNum attributes', () => {
			expect(grid.state(3, 3)).toBeObject();
		});
	});
	describe('initCells({cNum, rNum})', () => {
		it('retunrn an object wtih cNum and rNum attributes', () => {
			expect(grid.initCells(6, 6)).toBeArray();
		});
	});

	describe('makeGrid', () => {
		it('returns a graph of the cells ', () => {
			expect(grid.makeGrid(g66)).toBeObject();
		});
	});
});