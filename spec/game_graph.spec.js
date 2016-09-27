describe('GameGraph', function() {
	beforeAll(function() {
		console.log('\n.........GameGraph Spec.........');
	});

	beforeEach(function() {
		myGraph = GameGraph.spawn();
		myCells = allCells.filter((c, id) => id < 18);
		GameGraph.addNodes(myGraph)(...myCells);
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
	describe('spawn', () => {
		it('returns a graph of the cells ', () => {
			expect(GameGraph.spawn()).toBeObject();
		});
	});
	describe('graph methods', () => {
		describe('adjNodes', () => {
			it('creates an edge between each cell in a column', () => {
				GameGraph.connectAdjacents(myGraph);
			});
		});

		describe('addNodes', () => {
			it('adds nodes to a grid and connects them via adjNodes function', () => {
				expect(edges(mySub).has(n30)).toBeTrue();
			});
		});
		describe('removeNodes', () => {
			it('removes nodes from a grid and resets edges them via initEdges', () => {
				grid.removeNodes(mySub)(n30, n32);
				expect(edges(mySub).has(n30)).toBeFalse();
			});
		});
		describe('getComponents', () => {
			it('returns the length', () => {
				expect(GameGraph.getComponents(myGraph) instanceof Set).toBeTruthy();
			});
		});

		describe('countComponents', () => {
			it('returns the length of the components', () => {
				expect(GameGraph.countComponents(myGraph)).toBe(1);
			});
		});
	});
});