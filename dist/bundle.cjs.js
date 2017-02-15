"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var graphCurry=require("graph-curry"),isIterable=function(n){return!!n[Symbol.iterator]},iterify=function(n){return isIterable(n)?n:[n]},toConsumableArray=function(n){if(Array.isArray(n)){for(var o=0,r=Array(n.length);o<n.length;o++)r[o]=n[o];return r}return Array.from(n)},spread=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat(toConsumableArray(iterify(n)))},asSet=function(n){return new Set(spread(n))},atan=Math.atan,abs=Math.abs,PI=Math.PI,init={column:null,row:null,id:""},column=function n(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:init,n=o.column;return n},row=function n(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:init,n=o.row;return n},id=function n(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:init,n=o.id;return n},nodeString=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:init,o=n.column,r=n.row;return"{ node::"+o+"_"+r+" }"},node=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{column:n,row:o,id:nodeString({column:n,row:o})}},copy=function(n){return node(column(n),row(n))},colDiff=function(n){var o=n.column;return function(n){var r=n.column;return o-r}},rowDiff=function(n){var o=n.row;return function(n){var r=n.row;return o-r}},tangent=function(n){return function(o){return rowDiff(n)(o)/colDiff(n)(o)}},angleBetween=function(n){return function(o){return(atan(tangent(n)(o))%PI+PI)%PI}},sameCol=function(n){return function(o){return 0===abs(colDiff(n)(o))}},sameRow=function(n){return function(o){return 0===abs(rowDiff(n)(o))}},samePVector=function(n){return function(o){return angleBetween(n)(o)===.25*PI}},sameNVector=function(n){return function(o){return angleBetween(n)(o)===.75*PI}},cAdj=function(n){return function(o){return abs(colDiff(n)(o))<2}},rAdj=function(n){return function(o){return abs(rowDiff(n)(o))<2}},isEquivalent=function(n){return function(o){return sameCol(n)(o)&&sameRow(n)(o)}},xEquivalent=function(n){return function(o){return!isEquivalent(n)(o)}},isNeighbor=function(n){return function(o){return xEquivalent(n)(o)&&cAdj(n)(o)&&rAdj(n)(o)}},cIDs=function(n){return spread(asSet(n.map(column)))},rIDs=function(n){return spread(asSet(n.map(row)))},byCol=function(n){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return n.filter(sameCol({column:o}))}},byRow=function(n){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return n.filter(sameRow({row:o}))}},byPVec=function(n){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n.filter(samePVector({column:o,row:r}))}},byNVec=function(n){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n.filter(sameNVector({column:o,row:r}))}},byPosition=function(n){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n.find(isEquivalent({column:o,row:r}))}},generate=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=[],e=n-1;e>=0;e--)for(var t=o-1;t>=0;t--)r.unshift(node(e,t));return r},node$1=Object.freeze({column:column,row:row,id:id,nodeString:nodeString,node:node,copy:copy,colDiff:colDiff,rowDiff:rowDiff,tangent:tangent,angleBetween:angleBetween,sameCol:sameCol,sameRow:sameRow,samePVector:samePVector,sameNVector:sameNVector,cAdj:cAdj,rAdj:rAdj,isEquivalent:isEquivalent,xEquivalent:xEquivalent,isNeighbor:isNeighbor,cIDs:cIDs,rIDs:rIDs,byCol:byCol,byRow:byRow,byPVec:byPVec,byNVec:byNVec,byPosition:byPosition,generate:generate}),nodes=graphCurry.Graph.nodes,allAdj=function(n){return function(o){return nodes(n).filter(isNeighbor(o))}},rowAdj=function(n){return function(o){return allAdj(n)(o).filter(sameRow(o))}},colAdj=function(n){return function(o){return allAdj(n)(o).filter(sameCol(o))}},posAdj=function(n){return function(o){return allAdj(n)(o).filter(samePVector(o))}},negAdj=function(n){return function(o){return allAdj(n)(o).filter(sameNVector(o))}},adj=Object.freeze({allAdj:allAdj,rowAdj:rowAdj,colAdj:colAdj,posAdj:posAdj,negAdj:negAdj}),toConsumableArray$1=function(n){if(Array.isArray(n)){for(var o=0,r=Array(n.length);o<n.length;o++)r[o]=n[o];return r}return Array.from(n)},addEdges=graphCurry.Graph.addEdges,nodes$1=graphCurry.Graph.nodes,joinAdj=function(n,o){return addEdges(n)(o,0).apply(void 0,toConsumableArray$1(allAdj(n)(o)))},joinCols=function(n,o){return addEdges(n)(o,0).apply(void 0,toConsumableArray$1(colAdj(n)(o)))},joinRows=function(n,o){return addEdges(n)(o,0).apply(void 0,toConsumableArray$1(rowAdj(n)(o)))},joinPVectors=function(n,o){return addEdges(n)(o,0).apply(void 0,toConsumableArray$1(posAdj(n)(o)))},joinNVectors$1=function(n,o){return addEdges(n)(o,0).apply(void 0,toConsumableArray$1(negAdj(n)(o)))},joinGrid=function(n){return nodes$1(n).reduce(joinAdj,n)},colGrid=function(n){return nodes$1(n).reduce(joinCols,n)},rowGrid=function(n){return nodes$1(n).reduce(joinRows,n)},posGrid=function(n){return nodes$1(n).reduce(joinPVectors,n)},negGrid=function(n){return nodes$1(n).reduce(joinNVectors$1,n)},join=Object.freeze({joinAdj:joinAdj,joinCols:joinCols,joinRows:joinRows,joinPVectors:joinPVectors,joinNVectors:joinNVectors$1,joinGrid:joinGrid,colGrid:colGrid,rowGrid:rowGrid,posGrid:posGrid,negGrid:negGrid}),componentSet=graphCurry.Components.componentSet,colComps=function(n){return componentSet(colGrid(n))},rowComps=function(n){return componentSet(rowGrid(n))},posComps=function(n){return componentSet(posGrid(n))},negComps=function(n){return componentSet(negGrid(n))},omniComps=function(n){return[colComps,negComps,posComps,rowComps].map(function(o){return o(n)}).reduce(function(n,o){return new Set(n).add(o)},new Set)},splitComps=function(n){return(new Map).set("row",rowComps(n)).set("col",colComps(n)).set("pos",posComps(n)).set("neg",negComps(n))},components=Object.freeze({colComps:colComps,rowComps:rowComps,posComps:posComps,negComps:negComps,omniComps:omniComps,splitComps:splitComps}),graph=graphCurry.Graph.graph,nodes$2=graphCurry.Graph.nodes,genNodes=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=[],e=n-1;e>=0;e--)for(var t=o-1;t>=0;t--)r.unshift(node(e,t));return r},cIDs$1=function(n){return new Set(nodes$2(n).map(column))},rIDs$1=function(n){return new Set(nodes$2(n).map(row))},grid=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return graph.apply(void 0,toConsumableArray$1(genNodes(n,o)))},copy$1=function(n){return graph.apply(void 0,toConsumableArray$1(nodes$2(n)))},nodesByColumn=function(n){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return nodes$2(n).filter(sameCol({column:o}))}},nodesByRow=function(n){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return nodes$2(n).filter(sameRow({row:o}))}},nodesByPVector=function(n){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return nodes$2(n).filter(samePVector({column:o,row:r}))}},nodesByNVector=function(n){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return nodes$2(n).filter(sameNVector({column:o,row:r}))}},nodeByPosition=function(n){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return nodes$2(n).find(isEquivalent({column:o,row:r}))}},joinGrid$1=function(n){return nodes$2(n).reduce(joinAdj,n)},colGrid$1=function(n){return nodes$2(n).reduce(joinCols,n)},rowGrid$1=function(n){return nodes$2(n).reduce(joinRows,n)},posGrid$1=function(n){return nodes$2(n).reduce(joinPVectors,n)},negGrid$1=function(n){return nodes$2(n).reduce(joinNVectors,n)},grid$1=Object.freeze({genNodes:genNodes,cIDs:cIDs$1,rIDs:rIDs$1,grid:grid,copy:copy$1,nodesByColumn:nodesByColumn,nodesByRow:nodesByRow,nodesByPVector:nodesByPVector,nodesByNVector:nodesByNVector,nodeByPosition:nodeByPosition,joinGrid:joinGrid$1,colGrid:colGrid$1,rowGrid:rowGrid$1,posGrid:posGrid$1,negGrid:negGrid$1});exports.Adj=adj,exports.Components=components,exports.Grid=grid$1,exports.Join=join,exports.Node=node$1;
//# sourceMappingURL=bundle.cjs.js.map
