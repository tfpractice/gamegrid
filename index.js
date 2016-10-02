// const inquirer = require('inquirer');
// const { player, grid, Game } = require('./app');
// let nameQ = {
// 	type: 'input',
// 	name: 'player_name',
// 	message: 'whats your name?',
// 	default: 'player_one',
// };

// let currentPlayers = [];

// let logProm = (pVal) => {
// 	console.log(pVal);
// 	return pVal;
// };

// let addPlayer = (plr) => currentPlayers = [plr, ...currentPlayers];
// let checkLength = (arr) => arr.length < 2;
// let askForName = () => inquirer.prompt([nameQ])
// 	.then(playerFromName)
// 	.then(logProm)
// 	.then(addPlayer)
// 	.then(logProm);
// let playerFromName = ({ player_name }) => player(player_name);
// let newBoard = (c, r) => grid.makeGrid(grid.state(c, r));

// let newGame = (players) => Game.spawn(...players, newBoard(7, 6));
// let showCurrent = (game) => Game.current(game);
// askForName()
// 	.then(checkLength)
// 	.then(askForName)
// 	.then(logProm)
// 	.then(newGame)
// 	.then(logProm)
// 	.then(g => {
// 		Game.completeTurn(g);
// 		return (g);
// 	})
// 	.then(logProm);
// .then(makeNewGame, failCallbacks);

module.exports = require('./app');