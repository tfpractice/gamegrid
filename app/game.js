const Player = require('./player');
const Grid = require('./grid');

const spawn = (active, passive, grid) => ({ players: [active, passive], grid });
const players = ({ players }) => players;
const activePlayer = ({ players: [active, passive] }) => active;
const passivePlayer = ({ players: [active, passive] }) => passive;
const togglePlayers = ({ players: [active, passive] }) => {
	// console.log(players[0]);
	// console.log(players[1]);
	// console.log(active);
	// let []
	// console.log(players);
};
module.exports = {
	spawn,
	players,
	activePlayer,
	passivePlayer,
	togglePlayers
};
// module.exports = game;