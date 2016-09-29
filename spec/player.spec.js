describe('player', function() {
	beforeAll(function() {
		console.log('\n.........player Spec.........');
		P = player;
		G = Graph;
	});

	beforeEach(function() {
		john = player('john');
		jCells = allCells.filter((c, id) => id > 17);
		P.claimCells(john)(...jCells);
	});

	describe('when given a name string', () => {
		it('retuns an object with that name', () => {
			expect(P('john')).toBeObject();
		});
	});
	describe('name(P)', () => {
		it('retrieves the name attribute', () => {
			expect(P.getName(john)).toBe('john');
		});
	});

	describe('score', () => {
		it('returns the players score', () => {
			expect(P.score(john)).toBe(0);
		});
	});
	describe('incrementScore', () => {
		it('increases the score by one', () => {
			P.incrementScore(john);
			expect(P.score(john)).toBe(1);
		});
	});
	describe('decrementScore', () => {
		it('increases the score by one', () => {
			P.decrementScore(john);
			expect(P.score(john)).toBe(-1);
		});
	});
	describe('getGraph', () => {
		it('returns the Ps graph object', () => {
			expect(P.getGraph(john)).toBeObject();
		});
	});

	describe('claimCell', () => {
		it('adds a cell to the Ps graph', () => {
			n30 = allCells.find(({ column, row }) =>
				column === 3 && row === 0);
			P.claimCells(john)(n30);
			expect(G.edges(P.getGraph(john)).has(n30)).toBeTrue();
		});
	});
});