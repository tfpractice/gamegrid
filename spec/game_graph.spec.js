fdescribe('GameGraph', function() {
	beforeAll(function() {
		console.log('\n.........GameGraph Spec.........');
		({ GameGraph } = app);
	});

	beforeEach(function(done) {
		myGraph = GameGraph.spawn();
		eGraph = GameGraph.spawn();
		oGraph = GameGraph.spawn();
		GameGraph.addNodes(myGraph)(...myCells);
		GameGraph.addNodes(eGraph)(...evens);
		GameGraph.addNodes(oGraph)(...odds);
		done();
	});

	describe('nodes', () => {
		it('returns the nodes of the GameGraph', () => {
			expect(GameGraph.nodes(myGraph)).toBeArray();
		});
	});
	describe('nodesByColumn', () => {
		it('returns the nodes of the GameGraph', () => {
			expect(GameGraph.nodesByColumn(myGraph)(2)).toBeArray();
		});
	});
	describe('nodesByRow', () => {
		it('returns the nodes of the GameGraph', () => {
			expect(GameGraph.nodesByRow(myGraph)(2)).toBeArray();
		});
	});
	describe('nodesByPlayer', () => {
		it('retrives a node with the specified row and column', function() {
			expect(GameGraph.nodesByPlayer(myGraph)(null)).toBeArray();
		});
	});
	describe('nodeByPosition', () => {
		it('retrives a node with the specified row and column', function() {
			expect(GameGraph.nodeByPosition(myGraph)(0, 3)).toBeObject();
		});
	});
	describe('nodesByPVector', () => {
		it('retrives a node with the specified row and column', function() {
			expect(GameGraph.nodesByPVector(myGraph)(0, 3)).toBeArray();
		});
	});
	describe('nodesByNVector', () => {
		it('retrives a node with the specified row and column', function() {
			expect(GameGraph.nodesByNVector(myGraph)(0, 3)).toBeArray();
		});
	});

	describe('graph representations', () => {
		describe('playerGraph', () => {
			it('returns a new Graph of only nodes belonging to a player', () => {
				expect(GameGraph.playerGraph(myGraph)(null) instanceof Map).toBeTrue();
			});
		});

		describe('transferNodes', () => {
			it('transfers nodes from one graph to another', () => {
				let e3 = evens[3];
				GameGraph.transferNodes(eGraph)(oGraph)(e3);
				expect(GameGraph.contains(oGraph)(e3)).toBeTrue();
				expect(GameGraph.contains(eGraph)(e3)).toBeFalse();
			});
		});
	});
});