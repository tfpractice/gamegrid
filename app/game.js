const Player = require('./player');
const Grid = require('./grid');
const GameGraph = require('./game_graph');
const { cells, cellByPosition, transferCells } = GameGraph;
const { getGraph: pGraph, claimCells } = Player;

const spawn = (active, passive, grid) => ({ players: [ active, passive ],
    grid,
    current: cells(grid)[0], });

const grid = ({ grid }) => grid;
const players = ({ players }) => players;
const active = ({ players: [active, passive] }) => active;
const passivePlayer = ({ players: [active, passive] }) => passive;
const current = ({ current }) => current;

const togglePlayers = ({ players }) => {
    let [passive, active] = players;
    [players[1], players[0]] = [ passive, active ];
};

const setCurrent = (game) => (current) => {
    Object.assign(game, { current });
};

const selectCell = (game) => (column, row) => {
    setCurrent(game)(cellByPosition(grid(game))(column, row));
};

const completeTurn = (game) => {
    transferCells(grid(game))(pGraph(active(game)))(current(game));
    togglePlayers(game);
};

module.exports = { spawn,
    players,
    grid,
    active,
    completeTurn,
	passivePlayer,
    togglePlayers,
    selectCell,
    setCurrent,
    current, };
