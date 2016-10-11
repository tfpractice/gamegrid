fdescribe('GameGraph', function () {
    beforeAll(function () {
        console.log('\n.........GameGraph Spec.........');
        ({ GameGraph } = app);
    });

    beforeEach(function (done) {
        myGraph = GameGraph.spawn();
        eGraph = GameGraph.spawn();
        oGraph = GameGraph.spawn();
        evens = allCells.filter((c, id) => id % 2 === 0);
        odds = allCells.filter((c, id) => id % 2 !== 0);
        myCells = allCells.filter((c, id) => id < 18);
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
        it('retrives a node with the specified row and column', function () {
            expect(GameGraph.nodesByPlayer(myGraph)(null)).toBeArray();
        });
    });
    describe('nodeByPosition', () => {
        it('retrives a node with the specified row and column', function () {
            expect(GameGraph.nodeByPosition(myGraph)(0, 3)).toBeObject();
        });
    });

    describe('graph representations', () => {
        describe('omniGraph', function () {
            it('returns a new Graph with all neighbors joined', function () {
                expect(GameGraph.omniGraph(myGraph) instanceof Map).toBeTrue();
            });
        });

        describe('colGraph', () => {
            it('returns a new Graph with only columns joined', function () {
                expect(GameGraph.colGraph(myGraph) instanceof Map).toBeTrue();
            });
        });
        describe('rowGraph', () => {
            it('returns a new Graph with only columns joined', function () {
				expect(GameGraph.rowGraph(myGraph) instanceof Map).toBeTrue();
            });
        });
        describe('posGraph', () => {
            it('returns a new Graph with only columns joined', function () {
                expect(GameGraph.posGraph(myGraph) instanceof Map).toBeTrue();
            });
        });
        describe('negGraph', () => {
            it('returns a new Graph with only columns joined', function () {
                expect(GameGraph.negGraph(myGraph) instanceof Map).toBeTrue();
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
