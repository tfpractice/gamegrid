fdescribe('Traversals', function() {
	beforeAll(function() {
		console.log('\n.........Traversals Spec.........');
		({ GameGraph, Traversals } = app);
	});

	beforeEach(function() {
		myGraph = GameGraph.spawn();
		GameGraph.addNodes(myGraph)(...allCells);
	});

	describe('graph representations', () => {
		describe('omniGraph', function() {
			it('returns a new Graph with all neighbors joined', function() {
				expect(Traversals.omniGraph(myGraph) instanceof Map).toBeTrue();
			});
		});

		describe('colGraph', () => {
			it('returns a new Graph with only columns joined', function() {
				expect(Traversals.colGraph(myGraph) instanceof Map).toBeTrue();
			});
		});
		describe('rowGraph', () => {
			it('returns a new Graph with only columns joined', function() {
				expect(Traversals.rowGraph(myGraph) instanceof Map).toBeTrue();
			});
		});
		describe('posGraph', () => {
			it('returns a new Graph with only columns joined', function() {
				expect(Traversals.posGraph(myGraph) instanceof Map).toBeTrue();
			});
		});
		describe('negGraph', () => {
			it('returns a new Graph with only columns joined', function() {
				expect(Traversals.negGraph(myGraph) instanceof Map).toBeTrue();
			});
		});
		describe('colComponents', function() {
			it('returns the connected components in a column graph', () => {
				console.log('****colComponents****');
				[...Traversals.colComponents(myGraph)]
				.map(c => console.log('comp', GT.Utils.Strings.pathString(c)));
				expect(Traversals.colComponents(myGraph) instanceof Set).toBeTrue();
			});
		});

		describe('rowComponents', function() {
			it('returns the connected components in a column graph', () => {
				console.log('****rowComponents****');
				[...Traversals.rowComponents(myGraph)]
				.map(c => console.log('comp', GT.Utils.Strings.pathString(c)));
				expect(Traversals.rowComponents(myGraph) instanceof Set).toBeTrue();
			});
		});

		describe('posComponents', function() {
			it('returns the connected components in a column graph', () => {
				console.log('****posComponents****');
				[...Traversals.posComponents(myGraph)]
				.map(c => console.log('comp', GT.Utils.Strings.pathString(c)));
				expect(Traversals.posComponents(myGraph) instanceof Set).toBeTrue();
			});
		});

		describe('negComponents', function() {
			it('returns the connected components in a column graph', () => {
				console.log('****negComponents****');
				[...Traversals.negComponents(myGraph)]
				.map(c => console.log('comp', GT.Utils.Strings.pathString(c)));
				expect(Traversals.negComponents(myGraph) instanceof Set).toBeTrue();
			});
		});
	});
});