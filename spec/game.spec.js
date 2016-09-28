describe('game', function() {
	beforeAll(function() {
		console.log('\n.........game Spec.........');
		P = player;
		GR = Graph;
	});

	beforeEach(function() {
		dick = P('Dick');
		jane = P('Jane');
		myGame = Game.spawn(jane, dick, myGrid);
	});

	describe('players', function() {
		it('returns the players attribute of the', function() {
			expect(Game.players(myGame)).toBeArray();
		});
	});

	describe('activePlayer', function() {
		it('returns the games active ', function() {
			expect(Game.activePlayer(myGame)).toBe(jane);
		});
	});

	describe('togglePlayers', function() {
		it('returns the games active ', function() {
			// console.log(Game.players(myGame));
			Game.togglePlayers(myGame);
			// console.log(Game.players(myGame));
			// expect(Game.togglePlayers(myGame)).toBeArray();
		});
	});
	//
	// describe('when given a name string', () => {
	// it('retuns an object with that name', function() {
	// expect(P('john')).toBeObject();
	// });
	// });
	// describe('name(P)', function() {
	// it('retrieves the name attribute', function() {
	// expect(P.getName(john)).toBe('john');
	// });
	// });
	//
	// describe('getGraph', () => {
	// it('returns the Ps graph object', function() {
	// expect(P.getGraph(john)).toBeObject();
	// });
	// });
	// describe('getComponents', () => {
	// it('retrives the components of the players graph', function() {
	// console.log(P.getComponents(john));
	// console.log(G.edges(P.getGraph(john)));
	// });
	// });
	//
	// describe('claimCell', () => {
	// it('adds a cell to the Ps graph', function() {
	// P.claimCells(john)(n30);
	// expect(G.edges(P.getGraph(john)).has(n30)).toBeTrue();
	// });
	// });
});