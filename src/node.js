const init = { column: null, row: null, id: '' };

// **column** `::  Node ->  Number`
// returns a node's column property
export const column = ({ column } = init) => column;

// **row** `::  Node ->  Number`
// returns a node's row property
export const row = ({ row } = init) => row;

// **id** `::  Node ->  String`
// returns a node's row property
export const id = ({ id } = init) => id;

// **show** `::  Node ->  String`
// returns a string representation of a node
export const show = ({ column, row } = init) => `<c${column}_r${row}>`;

// **node** `::  (Number, Number) -> Node`
// returns an object with column and row properties
export const node = (column = null, row = null) =>
 ({ column, row, id: show({ column, row }), });

 // **copy** `::  Node -> Node`
 // returns a copy of a node
export const copy = n => node(column(n), row(n));

// **setCol** `::  Node -> Node`
// returns a copy of a node with a modified row
export const setCol = c => n => node(c, row(n));

// **setRow** `::  Node -> Node`
// returns a copy of a node with a modified row
export const setRow = r => n => node(column(n), r);
