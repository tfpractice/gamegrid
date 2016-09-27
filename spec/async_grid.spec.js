describe('subGrid', function() {
	beforeAll(function() {
		console.log('\n.........subGrid Spec.........');
		({ subGrid } = grid);
		({ edges, nodes } = Graph);
	});

	it('is an empty graph', () => {
		expect(nodes(grid.subGrid()).size).toBe(0);
	});

	describe('addNodes', () => {
		it('adds nodes to a grid and connects them via adjNodes function', () => {
			expect(edges(mySub).has(n30)).toBeTrue();
		});
	});
	describe('removeNodes', () => {
		it('removes nodes from a grid and resets edges them via initEdges', () => {
			grid.removeNodes(mySub)(n30, n32);
			expect(edges(mySub).has(n30)).toBeFalse();
		});
	});
	describe('name(subGrid)', () => {
		it('retrievs the name attribute', () => {
			// expect(subGrid.getName(john)).toBe('john');
		});
	});
});