const Player = require('./player');
const Grid = require('./grid');

const spawn = (active, passive, grid) => ({ players: [active, passive], grid });
const players = ({ players }) => players;
const activePlayer = ({ players: [active, passive] }) => active;
const passivePlayer = ({ players: [active, passive] }) => passive;
const togglePlayers = ({ players }) => {
	let [passive, active] = players;
	[players[1], players[0]] = [passive, active];
};

module.exports = {
	spawn,
	players,
	activePlayer,
	passivePlayer,
	togglePlayers,
};
// module.exports = game;