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

	describe('grid', () => {
		it('returns the grid of the game', function() {
			expect(Game.grid(myGame)).toBeObject();
		});
	});
	describe('players', function() {
		it('returns the players attribute of the', function() {
			expect(Game.players(myGame)).toBeArray();
		});
	});

	describe('active', function() {
		it('returns the games active ', function() {
			expect(Game.active(myGame)).toBe(jane);
		});
	});

	describe('togglePlayers', function() {
		it('switches the games active player ', function() {
			Game.togglePlayers(myGame);
			expect(Game.active(myGame)).toBe(dick);
		});
	});

	describe('selectNode', () => {
		it('returns a node at the specified position', function() {
			let n30 = Game.selectNode(myGame)(3, 0);

			(Game.setCurrent(myGame)(n30));

			expect(Game.selectNode(myGame)(3, 0)).toBeObject();
		});
	});
	describe('assignNodes', () => {
		it('transfers nodes from the grid to the active player', function() {
			let n30 = Game.selectNode(myGame)(3, 0);
			Game.assignNodes(myGame)(n30);
			expect(myGame.grid.contains(n30)).toBeFalse();
		});

		it('switches the current player', function() {
			let oldPlayer = Game.active(myGame);
			let n30 = Game.selectNode(myGame)(3, 0);
			Game.assignNodes(myGame)(n30);
			expect(Game.active(myGame)).not.toBe(oldPlayer);
		});
	});
	describe('completeTurn', () => {
		it('transfers nodes from the grid to the active player', function() {
			let n30 = Game.selectNode(myGame)(3, 0);
			Game.completeTurn(myGame);
			expect(myGame.grid.contains(n30)).toBeFalse();
		});

		it('switches the current player', function() {
			let oldPlayer = Game.active(myGame);
			let n40 = Game.selectNode(myGame)(4, 0);
			Game.completeTurn(myGame);
			expect(Game.active(myGame)).not.toBe(oldPlayer);
		});
	});
});