describe('player', function() {
	beforeAll(function() {
		console.log('\n.........player Spec.........');
		P = player;
		G = Graph;
	});
	//
	beforeEach(function() {
		john = player('john');
		jCells = allCells.filter((c, id) => id > 17);
		n30 = allCells.find(({ column, row }) => column === 5 && row === 0);
		n31 = allCells.find(({ column, row }) => column === 5 && row === 1);
		n32 = allCells.find(({ column, row }) => column === 5 && row === 2);
		P.claimCells(
			john)(...jCells);
	});

	describe('when given a name string', () => {
		it('retuns an object with that name', function() {
			expect(P('john')).toBeObject();
		});
	});
	describe('name(P)', function() {
		it('retrieves the name attribute', function() {
			expect(P.getName(john)).toBe('john');
		});
	});

	describe('score', () => {
		it('returns the players score', function() {
			expect(P.score(john)).toBe(0);
		});
	});
	describe('incrementScore', () => {
		it('increases the score by one', function() {
			P.incrementScore(john);
			expect(P.score(john)).toBe(1);
		});
	});
	describe('incrementScore', () => {
		it('increases the score by one', function() {
			P.decrementScore(john);
			expect(P.score(john)).toBe(-1);
		});
	});
	describe('getGraph', () => {
		it('returns the Ps graph object', function() {
			expect(P.getGraph(john)).toBeObject();
		});
	});

	describe('claimCell', () => {
		it('adds a cell to the Ps graph', function() {
			let jGraph = P.getGraph(john);
			P.claimCells(john)(n30, n31, n32);
			expect(G.edges(P.getGraph(john)).has(n30)).toBeTrue();
		});
	});
});