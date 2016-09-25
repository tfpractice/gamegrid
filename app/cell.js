let cell = (column = null, row = null) => ({ column, row });
let column = ({ column, row }) => column;
let row = ({ column, row }) => row;
module.exports = cell;
module.exports.column = column;
module.exports.row = row;