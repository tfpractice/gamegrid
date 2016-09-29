describe('player', function () {
    beforeAll(function () {
        console.log('\n.........player Spec.........');
        P = player;
        G = Graph;
    });
    //
    beforeEach(function () {
        john = player('john');
        jCells = allCells.filter((c, id) => id > 17);

        P.claimCells(john)(...jCells);
    });
    //
    describe('when given a name string', () => {
        it('retuns an object with that name', function () {
            expect(P('john')).toBeObject();
        });
    });
    describe('name(P)', function () {
        it('retrieves the name attribute', function () {
            expect(P.getName(john)).toBe('john');
        });
    });

    describe('getGraph', () => {
        it('returns the Ps graph object', function () {
            expect(P.getGraph(john)).toBeObject();
        });
    });
    // describe('getComponents', () => {
	// it('retrives the components of the players graph', function() {
	// console.log(P.getComponents(john));
	// console.log(G.edges(P.getGraph(john)));
	// });
	// });
	//
	describe('claimCell', () => {
        it('adds a cell to the Ps graph', function () {
            P.claimCells(john)(n30);
            expect(G.edges(P.getGraph(john)).has(n30)).toBeTrue();
        });
    });
});
