let cell = (column = null, row = null) => ({
	column,
	row,
	toString: () =>
		`{ cell::${column}_${row} }`,
});
let column = ({ column, row }) => column;
let row = ({ column, row }) => row;
let cellString = ({ column, row }) => `{ cell::${column}_${row} }`;

module.exports = cell;
module.exports.column = column;
module.exports.row = row;
module.exports.cellString = cellString;