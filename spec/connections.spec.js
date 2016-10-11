fdescribe('Connections', function() {
	beforeAll(function() {
		console.log('\n.........Connections Spec.........');
	});

	beforeEach(function(done) {
		myGraph = GameGraph.spawn();
		eGraph = GameGraph.spawn();
		oGraph = GameGraph.spawn();
		evens = allCells.filter((c, id) => id % 2 === 0);
		odds = allCells.filter((c, id) => id % 2 !== 0);
		myCells = allCells.filter((c, id) => id < 18);
		[n00, n01, n02, n03, n04, n05,
			n10, n11, n12, n13, n14, n15,
			n20, n21, n22,
		] = myCells;
		GameGraph.addNodes(myGraph)(...myCells);
		GameGraph.addNodes(eGraph)(...evens);
		GameGraph.addNodes(oGraph)(...odds);
		done();
	});

	describe('adjNodes/adjCells', () => {
		it('returns all neighboring nodes', () => {
			expect(Connections.adjNodes(myGraph)(n11)).toBeArray();
		});
	});
	describe('rowAdj ', () => {
		it('returns all neighboring nodes adjacent bby row', () => {
			expect(Connections.rowAdj(myGraph)(n11)).toBeArray();
		});
	});
	describe('colAdj ', () => {
		it('returns all neighboring nodes adjacent by column', () => {
			expect(Connections.colAdj(myGraph)(n11)).toBeArray();
		});
	});
	describe('posAdj ', () => {
		it('returns all neighboring nodes adjacent bby row', () => {
			expect(Connections.posAdj(myGraph)(n11)).toBeArray();
		});
	});
	describe('negAdj ', () => {
		it('returns all neighboring nodes adjacent by column', () => {
			expect(Connections.negAdj(myGraph)(n11)).toBeArray();
		});
	});
	describe('adjConnectR', () => {
		it('creates Edges between a cell and its adjacents', function() {
			Connections.adjConnectR(myGraph, n11);
			expect(GameGraph.neighbors(myGraph)(n11)).toBeArray();
		});
	});
	describe('joinAdj', () => {
		it('creates edges between all adjacent nodes', function() {
			expect(Connections.joinAdj(myGraph) instanceof Map).toBeTrue();
		});
	});
	describe('joinCols', () => {
		it('creates edges between colAdj', () => {
			Connections.joinCols(myGraph);
		});
	});

	describe('joinRows', () => {
		it('creates edges between rowAdj', () => {
			Connections.joinRows(myGraph);
		});
	});

	describe('joinPVectors', () => {
		it('creates edges between posAdj', () => {
			Connections.joinPVectors(myGraph);
		});
	});

	describe('joinNVectors', () => {
		it('creates edges between negAdj', () => {
			Connections.joinNVectors(myGraph);
		});
	});
	describe('joinAdj', () => {
		it('creates edges between all adjacent cells', () => {
			Connections.joinAdj(myGraph);
		});
	});

	// describe('colComponents', function() {
	// 	it('retrives the compnents of the colGraph', function() {
	// 		expect(Connections.colComponents(myGraph) instanceof Set).toBeTrue();
	// 	});
	// });

	// describe('rowComponents', function() {
	// 	it('retrives the compnents of the colGraph', function() {
	// 		expect(Connections.rowComponents(myGraph) instanceof Set).toBeTrue();
	// 	});
	// });

	// describe('posComponents', function() {
	// 	it('retrives the compnents of the colGraph', function() {
	// 		expect(Connections.posComponents(myGraph) instanceof Set).toBeTrue();
	// 	});
	// });

	// describe('negComponents', function() {
	// 	it('retrives the compnents of the colGraph', function() {
	// 		expect(Connections.negComponents(myGraph) instanceof Set).toBeTrue();
	// 	});
	// });
});