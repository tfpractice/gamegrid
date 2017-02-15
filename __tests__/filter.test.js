import 'jasmine-expect';
import { node, } from 'src/node';
import { angleBetween, cAdj, colDiff, diffPos, isNeighbor, rAdj, rowDiff,
   sameCol, sameNVector, samePos, samePVector, sameRow, tangent, } from 'src/compare';

const c00 = node(0, 0);
const c01 = node(0, 1);
const c22 = node(2, 2);
const c31 = node(3, 1);
const c33 = node(3, 3);
const myNodes = [ c00, c01, c22, c31, c33, ];
