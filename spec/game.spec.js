describe('game', function() {
	beforeAll(function() {
		console.log('\n.........game Spec.........');
		P = player;
		GR = Graph;
	});

	beforeEach(function() {
		dick = P.spawn('Dick');
		jane = P.spawn('Jane');
		myGame = Game.spawn(jane, dick, myGrid);
	});

	describe('grid', () => {
		it('returns the grid of the game', () => {
			expect(Game.grid(myGame)).toBeObject();
		});
	});
	describe('players', () => {
		it('returns the players attribute of the', () => {
			expect(Game.players(myGame)).toBeArray();
		});
	});

	describe('active', () => {
		it('returns the games active ', () => {
			expect(Game.active(myGame)).toBe(jane);
		});
	});

	describe('togglePlayers', () => {
		it('switches the games active player ', () => {
			Game.togglePlayers(myGame);
			expect(Game.active(myGame)).toBe(dick);
		});
	});

	describe('selectCell', () => {
		it('returns a node at the specified position', () => {
			Game.selectCell(myGame)(3, 0);
			expect(Game.current(myGame)).toBeObject();
		});
	});

	describe('completeTurn', () => {
		it('transfers nodes from the grid to the active player', () => {
			let n30 = Game.selectCell(myGame)(3, 0);
			Game.completeTurn(myGame);
			expect(Graph.contains(Game.grid(myGame))(n30)).toBeFalse();
		});

		it('switches the current player', () => {
			let oldPlayer = Game.active(myGame);
			let n40 = Game.selectCell(myGame)(4, 0);
			Game.completeTurn(myGame);
			expect(Game.active(myGame)).not.toBe(oldPlayer);
		});
	});
});