describe('Traversals', function() {
	beforeAll(function() {
		console.log('\n.........Traversals Spec.........');
		({ Grid, Traversals } = app);
	});

	beforeEach(function() {
		myGraph = Grid.spawn();
		Grid.addNodes(myGraph)(...allCells);
	});

	describe('graph representations', () => {
		describe('omniGraph', () => {
			it('returns a new Graph with all neighbors joined', () => {
				expect(Traversals.omniGraph(myGraph) instanceof Map).toBeTrue();
			});
		});
		describe('colGraph', () => {
			it('returns a new Graph with only columns joined', () => {
				expect(Traversals.colGraph(myGraph) instanceof Map).toBeTrue();
			});
		});
		describe('rowGraph', () => {
			it('returns a new Graph with only columns joined', () => {
				expect(Traversals.rowGraph(myGraph) instanceof Map).toBeTrue();
			});
		});
		describe('posGraph', () => {
			it('returns a new Graph with only columns joined', () => {
				expect(Traversals.posGraph(myGraph) instanceof Map).toBeTrue();
			});
		});
		describe('negGraph', () => {
			it('returns a new Graph with only columns joined', () => {
				expect(Traversals.negGraph(myGraph) instanceof Map).toBeTrue();
			});
		});
		describe('colComponents', () => {
			it('returns the connected components in a column graph', () => {
				expect(Traversals.colComponents(myGraph) instanceof Set).toBeTrue();
			});
		});
		describe('rowComponents', () => {
			it('returns the connected components in a column graph', () => {
				expect(Traversals.rowComponents(myGraph) instanceof Set).toBeTrue();
			});
		});
		describe('posComponents', () => {
			it('returns the connected components in a column graph', () => {
				expect(Traversals.posComponents(myGraph) instanceof Set).toBeTrue();
			});
		});
		describe('negComponents', () => {
			it('returns the connected components in a column graph', () => {
				expect(Traversals.negComponents(myGraph) instanceof Set).toBeTrue();
			});
		});
	});
});