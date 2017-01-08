!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("graph-curry")):"function"==typeof define&&define.amd?define("game-grid",["exports","graph-curry"],r):r(n["game-grid"]=n["game-grid"]||{},n.graphCurry)}(this,function(n,r){"use strict";var e=Math.atan,t=Math.abs,o=Math.PI,u=function n(r){var n=r.column;return n},i=function n(r){var n=r.row;return n},c=function(n){var r=n.column,e=n.row;return"{ node::"+r+"_"+e+" }"},f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{column:n,row:r,toString:function(){return c({column:n,row:r})}}},d=function(n){var r=n.column;return function(n){var e=n.column;return r-e}},l=function(n){var r=n.row;return function(n){var e=n.row;return r-e}},a=function(n){return function(r){return l(n)(r)/d(n)(r)}},s=function(n){return function(r){return(e(a(n)(r))%o+o)%o}},p=function(n){return function(r){return 0===t(d(n)(r))}},v=function(n){return function(r){return 0===t(l(n)(r))}},m=function(n){return function(r){return s(n)(r)===.25*o}},g=function(n){return function(r){return s(n)(r)===.75*o}},h=function(n){return function(r){return t(d(n)(r))<2}},y=function(n){return function(r){return t(l(n)(r))<2}},w=function(n){return function(r){return p(n)(r)&&v(n)(r)}},j=function(n){return function(r){return!w(n)(r)}},E=function(n){return function(r){return j(n)(r)&&h(n)(r)&&y(n)(r)}},A=Object.freeze({column:u,row:i,nodeString:c,node:f,colDiff:d,rowDiff:l,tangent:a,angleBetween:s,sameCol:p,sameRow:v,samePVector:m,sameNVector:g,cAdj:h,rAdj:y,isEquivalent:w,xEquivalent:j,isNeighbor:E,default:f}),B=function(n){if(Array.isArray(n)){for(var r=0,e=Array(n.length);r<n.length;r++)e[r]=n[r];return e}return Array.from(n)},C=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=[],t=n-1;t>=0;t--)for(var o=r-1;o>=0;o--)e.unshift(f(t,o));return e},M=function(n){return new Set(r.nodes(n).map(u))},N=function(n){return new Set(r.nodes(n).map(i))},S=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r.fromElements.apply(void 0,B(C(n,e)))},V=function(n){return r.fromElements.apply(void 0,B(r.nodes(n)))},G=function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r.nodes(n).filter(p({column:e}))}},P=function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r.nodes(n).filter(v({row:e}))}},b=function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r.nodes(n).filter(m({column:e,row:t}))}},x=function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r.nodes(n).filter(g({column:e,row:t}))}},D=function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r.nodes(n).find(w({column:e,row:t}))}},R=function(n){return function(e){return r.nodes(n).filter(E(e))}},q=function(n){return function(r){return R(n)(r).filter(v(r))}},I=function(n){return function(r){return R(n)(r).filter(p(r))}},_=function(n){return function(r){return R(n)(r).filter(m(r))}},O=function(n){return function(r){return R(n)(r).filter(g(r))}},z=function(n){return function(r){return R(n)(r).filter(E(r))}},k=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,e=arguments[1];return r.addEdges(n)(e,0).apply(void 0,B(R(n)(e)))},F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,e=arguments[1];return r.addEdges(n)(e,0).apply(void 0,B(I(n)(e)))},H=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,e=arguments[1];return r.addEdges(n)(e,0).apply(void 0,B(q(n)(e)))},J=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,e=arguments[1];return r.addEdges(n)(e,0).apply(void 0,B(_(n)(e)))},K=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,e=arguments[1];return r.addEdges(n)(e,0).apply(void 0,B(O(n)(e)))},L=function(n){return r.nodes(n).reduce(k,n)},Q=function(n){return r.nodes(n).reduce(F,n)},T=function(n){return r.nodes(n).reduce(H,n)},U=function(n){return r.nodes(n).reduce(J,n)},W=function(n){return r.nodes(n).reduce(K,n)},X=function(n){return L(r.fromElements.apply(void 0,B(r.nodes(n))))},Y=function(n){return Q(r.fromElements.apply(void 0,B(r.nodes(n))))},Z=function(n){return T(r.fromElements.apply(void 0,B(r.nodes(n))))},$=function(n){return U(r.fromElements.apply(void 0,B(r.nodes(n))))},nn=function(n){return W(r.fromElements.apply(void 0,B(r.nodes(n))))},rn=function(n){return r.componentSet(Y(n))},en=function(n){return r.componentSet(Z(n))},tn=function(n){return r.componentSet($(n))},on=function(n){return r.componentSet(nn(n))};n.Grid=S,n.Node=A,n.adjNodes=R,n.rowAdj=q,n.colAdj=I,n.posAdj=_,n.negAdj=O,n.allAdj=z,n.joinAdjBin=k,n.joinColsBin=F,n.joinRowsBin=H,n.joinPVectorsBin=J,n.joinNVectorsBin=K,n.joinAdj=L,n.joinCols=Q,n.joinRows=T,n.joinPVectors=U,n.joinNVectors=W,n.omniGraph=X,n.colGraph=Y,n.rowGraph=Z,n.posGraph=$,n.negGraph=nn,n.colComponents=rn,n.rowComponents=en,n.posComponents=tn,n.negComponents=on,n.genNodes=C,n.cIDs=M,n.rIDs=N,n.initNodes=S,n.fromGrid=V,n.nodesByColumn=G,n.nodesByRow=P,n.nodesByPVector=b,n.nodesByNVector=x,n.nodeByPosition=D,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=bundle.umd.js.map
