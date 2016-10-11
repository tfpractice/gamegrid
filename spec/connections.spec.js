fdescribe('Connections', function() {
	beforeAll(function() {
		console.log('\n.........connections Spec.........');
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

	describe('rowAdj ', () => {
		it('returns all neighboring nodes adjacent bby row', () => {
			expect(Connections.rowAdj(myGraph)(n30)).toBeArray();
		});
	});
	describe('colAdj ', () => {
		it('returns all neighboring nodes adjacent by column', () => {
			expect(Connections.colAdj(myGraph)(n30)).toBeArray();
		});
	});
	describe('posAdj ', () => {
		it('returns all neighboring nodes adjacent bby row', () => {
			expect(Connections.posAdj(myGraph)(n30)).toBeArray();
		});
	});
	describe('negAdj ', () => {
		it('returns all neighboring nodes adjacent by column', () => {
			expect(Connections.negAdj(myGraph)(n30)).toBeArray();
		});
	});
	describe('allAdj', () => {
		it('creates an edge between each cell in a column', () => {
			expect(Connections.allAdj(myGraph)(n30)).toBeArray();
		});
	});

	describe('connectCols', () => {
		it('creates edges between colAdj', () => {
			Connections.connectCols(myGraph);
		});
	});

	describe('connectRows', () => {
		it('creates edges between rowAdj', () => {
			Connections.connectRows(myGraph);
		});
	});

	describe('connectPVectors', () => {
		it('creates edges between posAdj', () => {
			Connections.connectPVectors(myGraph);
		});
	});

	describe('connectNVectors', () => {
		it('creates edges between negAdj', () => {
			Connections.connectNVectors(myGraph);
		});
	});
	describe('connectAdj', () => {
		it('creates edges between all adjacent cells', () => {
			Connections.connectAdj(myGraph);
		});
	});
	describe('colGraph', () => {
		it('returns a new Graph with only columns connected', function() {
			expect(Connections.colGraph(myGraph) instanceof Map).toBeTrue();
		});
	});
	describe('rowGraph', () => {
		it('returns a new Graph with only columns connected', function() {
			expect(Connections.rowGraph(myGraph) instanceof Map).toBeTrue();
		});
	});
	describe('posGraph', () => {
		it('returns a new Graph with only columns connected', function() {
			expect(Connections.posGraph(myGraph) instanceof Map).toBeTrue();
		});
	});
	describe('negGraph', () => {
		it('returns a new Graph with only columns connected', function() {
			expect(Connections.negGraph(myGraph) instanceof Map).toBeTrue();
		});
	});
	describe('colComponents', function() {
		it('retrives the compnents of the colGraph', function() {
			expect(Connections.colComponents(myGraph) instanceof Set).toBeTrue();
		});
	});

	describe('rowComponents', function() {
		it('retrives the compnents of the colGraph', function() {
			expect(Connections.rowComponents(myGraph) instanceof Set).toBeTrue();
		});
	});

	describe('posComponents', function() {
		it('retrives the compnents of the colGraph', function() {
			expect(Connections.posComponents(myGraph) instanceof Set).toBeTrue();
		});
	});

	describe('negComponents', function() {
		it('retrives the compnents of the colGraph', function() {
			expect(Connections.negComponents(myGraph) instanceof Set).toBeTrue();
		});
	});
});