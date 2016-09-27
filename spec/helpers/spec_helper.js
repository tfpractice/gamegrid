beforeAll(function() {
	require('jasmine-expect');
	GT = require('functional_graph_theory');
	({ Graph, utils: gUtils, traversals } = GT);
	app = require('../../index');
	({ cell, grid, player, AsyncGrid } = app);
});

beforeEach(function() {
	g66 = grid.state(6, 6);
	myGrid = grid.makeGrid(g66);
	myAsync = AsyncGrid();

	everyThird = grid.cells(myGrid).filter((cell, id) => id % 3 === 0);
	mySub = grid.subGrid();
	grid.addNodes(mySub)(...everyThird);
	// console.log(everyThird.length);
	[n30, n31, n32, n33, n34, n35, n36, n37, n38, n39] = everyThird;
});