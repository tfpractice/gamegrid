beforeAll(function() {
	require('jasmine-expect');
	app = require('../../index');
	GT = require('functional_graph_theory');
	({ Graph, utils, traversals } = GT);
	({ cell, grid, GameGraph, player, Game } = app);
});

beforeEach(function() {
	myGrid = grid.spawn(6, 6);
	allCells = GameGraph.cells(myGrid);
	everyThird = allCells.filter((cell, id) => id % 3 === 0);
	[n30, n31, n32, n33, n34, n35, n36, n37, n38, n39] = everyThird;
});