describe('Grid', function() {
	beforeAll(function() {
		console.log('\n.........Grid Spec.........');
		({ Grid } = app);
	});

	beforeEach(function() {
		myGraph = Grid.spawn();
		eGraph = Grid.spawn();
		oGraph = Grid.spawn();
		allGraph = Grid.fromElements(...allCells);
		Grid.addNodes(myGraph)(...myCells);
		Grid.addNodes(eGraph)(...evens);
		Grid.addNodes(oGraph)(...odds);
	});

	describe('cellArray', () => {
		it('retunrn an object wtih cNum and rNum attributes', () => {
			expect(Grid.cellArray(6, 6)).toBeArray();
		});
	});
	describe('initCells({cNum, rNum})', () => {
		it('returns a grid{Map} of cNum and rNum cols and rows attributes', () => {
			expect(Grid.initCells(6, 6) instanceof Map).toBeTrue();
		});
	});

	describe('fromGrid', () => {
		it('returns a copy of the grid  ', () => {
			expect(Grid.fromGrid(Grid.fromElements(3, 3)) instanceof Map).toBeTrue();
		});
	});
	describe('nodes', () => {
		it('returns the nodes of the Grid', () => {
			expect(Grid.nodes(myGraph)).toBeArray();
		});
	});
	describe('nodesByColumn', () => {
		it('returns the nodes of the Grid', () => {
			expect(Grid.nodesByColumn(myGraph)(2)).toBeArray();
		});
	});
	describe('nodesByRow', () => {
		it('returns the nodes of the Grid', () => {
			expect(Grid.nodesByRow(myGraph)(2)).toBeArray();
		});
	});

	describe('nodeByPosition', () => {
		it('retrives a node with the specified row and column', () => {
			expect(Grid.nodeByPosition(myGraph)(0, 3)).toBeObject();
		});
	});
	describe('nodesByPVector', () => {
		it('retrives a node with the specified row and column', () => {
			expect(Grid.nodesByPVector(myGraph)(0, 3)).toBeArray();
		});
	});
	describe('nodesByNVector', () => {
		it('retrives a node with the specified row and column', () => {
			expect(Grid.nodesByNVector(myGraph)(0, 3)).toBeArray();
		});
	});
	describe('cIDs', () => {
		it('returns a set of column IDs', () => {
			expect(Grid.cIDs(allGraph) instanceof Set).toBeTrue();
		});
	});

	describe('rIDs', () => {
		it('returns a set of column IDs', () => {
			expect(Grid.rIDs(allGraph) instanceof Set).toBeTrue();
		});
	});

	describe('graph representations', () => {
		describe('transferNodes', () => {
			it('transfers nodes from one graph to another', () => {
				let e3 = evens[3];
				Grid.transferNodes(eGraph)(oGraph)(e3);
				expect(Grid.contains(oGraph)(e3)).toBeTrue();
				expect(Grid.contains(eGraph)(e3)).toBeFalse();
			});
		});
	});
});