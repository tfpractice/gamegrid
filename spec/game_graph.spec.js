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
		GameGraph.addNodes(myGraph)(...myCells);
		GameGraph.addNodes(eGraph)(...evens);
		GameGraph.addNodes(oGraph)(...odds);
		done();
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
	describe('cellsByPlayer', () => {
		it('retrives a cell with the specified row and column', function() {
			expect(GameGraph.cellsByPlayer(myGraph)(null)).toBeArray();
		});
	});
	describe('cellByPosition', () => {
		it('retrives a cell with the specified row and column', function() {
			expect(GameGraph.cellByPosition(myGraph)(0, 3)).toBeObject();
		});
	});

	describe('graph representations', () => {
		describe('colGraph', () => {
			it('returns a new Graph with only columns connected', function() {
				expect(GameGraph.colGraph(myGraph) instanceof Map).toBeTrue();
			});
		});
		describe('rowGraph', () => {
			it('returns a new Graph with only columns connected', function() {
				expect(GameGraph.rowGraph(myGraph) instanceof Map).toBeTrue();
			});
		});
		describe('posGraph', () => {
			it('returns a new Graph with only columns connected', function() {
				expect(GameGraph.posGraph(myGraph) instanceof Map).toBeTrue();
			});
		});
		describe('negGraph', () => {
			it('returns a new Graph with only columns connected', function() {
				expect(GameGraph.negGraph(myGraph) instanceof Map).toBeTrue();
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

		describe('countComponents', () => {
			it('returns the length of the components', () => {
				// expect(GameGraph.countComponents(myGraph)).toBe(1);
			});
		});
	});
});