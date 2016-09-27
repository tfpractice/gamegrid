const cell = (column = null, row = null) => ({
    column,
    row,
    toString: () =>
        `{ cell::${column}_${row} }`,
});
const column = ({ column, row }) => column;
const row = ({ column, row }) => row;
const cellString = ({ column, row }) => `{ cell::${column}_${row} }`;

const colDiff = ({ column: c0 }) => ({ column: c1 }) => Math.abs(c0 - c1);
const rowDiff = ({ row: r0 }) => ({ row: r1 }) => Math.abs(r0 - r1);
const cAdj = (src) => (alt) => colDiff(src)(alt) < 2;
const rAdj = (src) => (alt) => rowDiff(src)(alt) < 2;

const isNeighbor = (src) => (alt) =>
    x_isEquivalent(src)(alt) && cAdj(src)(alt) && rAdj(src)(alt);

const sameColumn = (src) => (alt) => colDiff(src)(alt) === 0;
const sameRow = (src) => (alt) => rowDiff(src)(alt) === 0;

const isEquivalent = ({ column: c, row: r }) =>
    ({ column: altC, row: altR }) =>
    c === altC && r === altR;
const x_isEquivalent = (src) => (alt) => !isEquivalent(src)(alt);

module.exports = cell;
module.exports.column = column;
module.exports.row = row;
module.exports.cellString = cellString;
module.exports.colDiff = colDiff;
module.exports.rowDiff = rowDiff;
module.exports.cAdj = cAdj;
module.exports.rAdj = rAdj;
module.exports.isNeighbor = isNeighbor;
module.exports.isEquivalent = isEquivalent;
module.exports.x_isEquivalent = x_isEquivalent;
module.exports.sameColumn = sameColumn;
module.exports.sameRow = sameRow;