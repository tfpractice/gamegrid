describe('Connections', function() {
	beforeAll(function() {
		console.log('\n.........Connections Spec.........');
	});

	beforeEach(function(done) {
		myGraph = Grid.spawn();
		eGraph = Grid.spawn();
		oGraph = Grid.spawn();
		centGrid = Grid.initCells(10, 10);
		centCells = Grid.nodes(centGrid);
		evens = centCells.filter((c, id) => id % 2 === 0);
		odds = centCells.filter((c, id) => id % 2 !== 0);
		myCells = allCells;
		[n00, n01, n02, n03, n04, n05,
			n10, n11, n12, n13, n14, n15,
			n20, n21, n22, n23, n24, n25,
			n30, n31, n32, n33, n34, n35,
		] = myCells;
		Grid.addNodes(myGraph)(...myCells);
		Grid.addNodes(eGraph)(...evens);
		Grid.addNodes(oGraph)(...odds);
		done();
	});

	describe('adjNodes/adjCells', () => {
		it('returns all neighboring nodes', () => {
			expect(Conn.adjNodes(myGraph)(n11)).toBeArray();
		});
	});
	describe('rowAdj ', () => {
		it('returns all neighboring nodes adjacent bby row', () => {
			expect(Conn.rowAdj(myGraph)(n11)).toBeArray();
		});
	});
	describe('colAdj ', () => {
		it('returns all neighboring nodes adjacent by column', () => {
			expect(Conn.colAdj(myGraph)(n11)).toBeArray();
		});
	});
	describe('posAdj ', () => {
		it('returns all neighboring nodes adjacent bby row', () => {
			expect(Conn.posAdj(myGraph)(n11)).toBeArray();
		});
	});
	describe('negAdj ', () => {
		it('returns all neighboring nodes adjacent by column', () => {
			expect(Conn.negAdj(myGraph)(n11)).toBeArray();
		});
	});
	describe('adjConnectR', () => {
		it('creates Edges between a cell and its adjacents', function() {
			Conn.adjConnectR(myGraph, n11);
			expect(Grid.neighbors(myGraph)(n11)).toBeArray();
		});
	});
	describe('joinAdj', () => {
		it('creates edges between all adjacent nodes', function() {
			expect(Conn.joinAdj(myGraph) instanceof Map).toBeTrue();
		});
	});
	describe('joinCols', () => {
		it('creates edges between colAdj', () => {
			let centralNabes = Grid.neighbors(Conn.joinCols(myGraph))(n22);
			expect(centralNabes.length).toBe(2);
		});
	});
	describe('joinRows', () => {
		it('creates edges between rowAdj', () => {
			let centralNabes = Grid.neighbors(Conn.joinRows(myGraph))(n22);
			expect(centralNabes.length).toBe(2);
		});
	});
	describe('joinPVectors', () => {
		it('creates edges between posAdj', () => {
			let centralNabes = Grid.neighbors(Conn.joinPVectors(myGraph))(n22);
			expect(centralNabes.length).toBe(2);
		});
	});
	describe('joinNVectors', () => {
		it('creates edges between negAdj', () => {
			let centralNabes = Grid.neighbors(Conn.joinNVectors(myGraph))(n22);
			expect(centralNabes.length).toBe(2);
		});
	});
	describe('joinAdj', () => {
		it('creates edges between all adjacent cells', () => {
			let centralNabes = Grid.neighbors(Conn.joinAdj(myGraph))(n22);
			expect(centralNabes.length).toBe(8);
		});
	});
});