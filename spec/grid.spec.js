describe('grid', function() {
	beforeAll(function() {
		console.log('\n.........grid Spec.........');
	});

	beforeEach(function() {
		g66 = grid.state(6, 6);
		myGrid = grid.makeGrid(g66);
	});

	describe('state', () => {
		it('retunrn an object wtih cNum and rNum attributes', function() {
			expect(grid.state(3, 3)).toBeObject();
		});
	});
	describe('initCells({cNum, rNum})', () => {
		it('retunrn an object wtih cNum and rNum attributes', function() {
			expect(grid.initCells(6, 6)).toBeArray();
		});
	});
	describe('cells', () => {
		it('returns the cells of the grid', function() {
			expect(grid.cells(g66)).toBeArray();
		});
	});
	describe('cellsByColumn', () => {
		it('returns the cells of the grid', function() {
			expect(grid.cellsByColumn(myGrid)(2)).toBeArray();
		});
	});
	describe('cellsByRow', () => {
		it('returns the cells of the grid', function() {
			expect(grid.cellsByRow(myGrid)(2)).toBeArray();
		});
	});
	describe('makeGrid', () => {
		it('returns a graph of the cells ', function() {
			expect(grid.makeGrid(g66)).toBeObject();
		});
	});
	describe('graph methods', () => {
		describe('colInit', () => {
			it('creates an edge between each cell in a column', function() {
				grid.colInit(myGrid);
				// console.log(myGrid.showGraph);
			});
		});
		describe('rowInit', () => {
			it('creates an edge between each cell in a column', function() {
				grid.rowInit(myGrid);
				// console.log(myGrid.showGraph);
			});
		});
		describe('initEdges', () => {
			it('creates an edge between each cell in a column', function() {
				grid.initEdges(myGrid);
				// console.log(myGrid.showGraph);
			});
		});
		describe('initEdges', () => {
			it('creates an edge between each cell in a column', function() {
				grid.initEdges(myGrid);
				// console.log(myGrid.showGraph);
			});
		});
	});

});