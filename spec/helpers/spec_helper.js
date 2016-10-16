beforeAll(function() {
	require('jasmine-expect');
	app = require('../../index');
	GT = require('functional_graph_theory');
	//  ({ Graph, utils, traversals } = GT);
	({ Cell, Grid, Connections } = app);
});

beforeEach(function() {
	myGrid = Grid.initCells(6, 6);
	allCells = Grid.nodes(myGrid);
	everyThird = allCells.filter((cell, id) => id % 3 === 0);
	[n30, n31, n32, n33, n34, n35, n36, n37, n38, n39] = everyThird;
	evens = allCells.filter((c, id) => id % 2 === 0);
	odds = allCells.filter((c, id) => id % 2 !== 0);
	myCells = allCells.filter((c, id) => id < 18);
});