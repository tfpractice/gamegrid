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
	describe('cells', () => {
		it('returns the cells of the grid', () => {
			expect(grid.cells(g66)).toBeArray();
		});
	});
	describe('cellsByColumn', () => {
		it('returns the cells of the grid', () => {
			expect(grid.cellsByColumn(myGrid)(2)).toBeArray();
		});
	});
	describe('cellsByRow', () => {
		it('returns the cells of the grid', () => {
			expect(grid.cellsByRow(myGrid)(2)).toBeArray();
		});
	});
	describe('makeGrid', () => {
		it('returns a graph of the cells ', () => {
			expect(grid.makeGrid(g66)).toBeObject();
		});
	});
	describe('graph methods', () => {
		describe('colInit', () => {
			it('creates an edge between each cell in a column', () => {
				grid.colInit(myGrid);
			});
		});
		describe('rowInit', () => {
			it('creates an edge between each cell in a column', () => {
				grid.rowInit(myGrid);
			});
		});
		describe('initEdges', () => {
			it('creates an edge between each cell in a column', () => {
				grid.initEdges(myGrid);
			});
		});
		describe('adjNodes', () => {
			it('creates an edge between each cell in a column', () => {
				grid.initEdges(myGrid);
			});
		});
	});
});