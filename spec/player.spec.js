describe('player', function() {
	beforeAll(function() {
		console.log('\n.........player Spec.........');
		P = player;
		G = Graph;
	});
	//
	// beforeEach(function() {
	// john = player('john');
	// allCells = grid.cells(myGrid);
	// jCells = allCells.filter((c, id) => id < 18);
	// console.log(jCells);

	// P.claimCells(john)(...jCells);
	// console.log(john);
	// });
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