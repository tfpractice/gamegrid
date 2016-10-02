const spawn = (column = null, row = null) => ({
	column,
	row,
	toString: () =>
		`{ cell::${column}_${row} }`,
});
const column = ({ column }) => column;
const row = ({ row }) => row;
const cellString = ({ column, row }) => `{ cell::${column}_${row} }`;

const colDiff = ({ column: c0 }) => ({ column: c1 }) => Math.abs(c0 - c1);
const rowDiff = ({ row: r0 }) => ({ row: r1 }) => Math.abs(r0 - r1);
const cAdj = (src) => (alt) => colDiff(src)(alt) < 2;
const rAdj = (src) => (alt) => rowDiff(src)(alt) < 2;

const isNeighbor = (src) => (alt) =>
	x_isEquivalent(src)(alt) && cAdj(src)(alt) && rAdj(src)(alt);

const sameColumn = (src) => (alt) => colDiff(src)(alt) === 0;
const sameRow = (src) => (alt) => rowDiff(src)(alt) === 0;

const isEquivalent = (c0) => (c1) =>
	colDiff(c0)(c1) === rowDiff(c0)(c1) && rowDiff(c0)(c1) === 0;
const x_isEquivalent = (src) => (alt) => !isEquivalent(src)(alt);

module.exports = {
	spawn,
	column,
	row,
	cellString,
	colDiff,
	rowDiff,
	cAdj,
	rAdj,
	isNeighbor,
	isEquivalent,
	x_isEquivalent,
	sameColumn,
	sameRow,
};