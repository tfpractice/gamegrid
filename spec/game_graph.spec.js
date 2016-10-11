fdescribe('GameGraph', function() {
	beforeAll(function() {
		console.log('\n.........GameGraph Spec.........');
		({ GameGraph } = app);
	});

	beforeEach(function(done) {
		myGraph = GameGraph.spawn();
		eGraph = GameGraph.spawn();
		oGraph = GameGraph.spawn();
		evens = allCells.filter((c, id) => id % 2 === 0);
		odds = allCells.filter((c, id) => id % 2 !== 0);
		myCells = allCells.filter((c, id) => id < 18);
		GameGraph.addCells(myGraph)(...myCells);
		GameGraph.addCells(eGraph)(...evens);
		GameGraph.addCells(oGraph)(...odds);
		done();
	});

	describe('spawn', () => {
		it('returns a graph of the cells ', () => {
			expect(GameGraph.spawn() instanceof Map).toBeTrue();
		});
	});
	describe('fromElements', () => {
		it('returns a graph of the cells ', () => {
			expect(GameGraph.fromElements() instanceof Map).toBeTrue();
		});
	});

	describe('cells', () => {
		it('returns the cells of the GameGraph', () => {
			expect(GameGraph.cells(myGraph)).toBeArray();
		});
	});
	describe('cellsByColumn', () => {
		it('returns the cells of the GameGraph', () => {
			expect(GameGraph.cellsByColumn(myGraph)(2)).toBeArray();
		});
	});
	describe('cellsByRow', () => {
		it('returns the cells of the GameGraph', () => {
			expect(GameGraph.cellsByRow(myGraph)(2)).toBeArray();
		});
	});
	describe('cellByPosition', () => {
		it('retrives a cell with the specified row and column', function() {
			expect(GameGraph.cellByPosition(myGraph)(0, 3)).toBeObject();
		});
	});
	describe('connectAdjR', () => {
		it('creates Edges between a cell and its adjacents', function() {
			// GameGraph.connectAdjR(myGraph, n30);
			// expect(GameGraph.neighbors(myGraph)(n30)).toBeArray();
		});
	});
	describe('graph methods', () => {
		describe('adjCells', () => {
			it('creates an edge between each cell in a column', () => {
				// GameGraph.connectAdjacents(myGraph);
				// expect(GameGraph.adjCells(myGraph)(n30)).toBeArray();
			});
		});
		describe('connectAdjacents', () => {
			it('creates edges between all adjacent nodes', function() {
				// expect(GameGraph.connectAdjacents(myGraph) instanceof Map).toBeTrue();
			});
		});
		describe('addCells', () => {
			it('adds nodes to a grid and connects them via adjCells function', () => {
				expect(myGraph.has(n30)).toBeTrue();
			});
		});
		describe('removeCells', () => {
			it('removes nodes from a grid and resets edges them via initEdges', () => {
				GameGraph.removeCells(myGraph)(n30, n32);
				expect(myGraph.has(n30)).toBeFalse();
			});
		});
		describe('transferCells', () => {
			it('transfers nodes from one graph to another', () => {
				let e3 = evens[3];
				GameGraph.transferCells(eGraph)(oGraph)(e3);
				expect(GameGraph.contains(oGraph)(e3)).toBeTrue();
				expect(GameGraph.contains(eGraph)(e3)).toBeFalse();
			});
		});
		// 	describe('getComponents', () => {
		// 		it('returns the length', () => {
		// 			expect(GameGraph.getComponents(myGraph) instanceof Set).toBeTruthy();
		// 		});
		// });
		describe('countComponents', () => {
			it('returns the length of the components', () => {
				expect(GameGraph.countComponents(myGraph)).toBe(1);
			});
		});
	});
});