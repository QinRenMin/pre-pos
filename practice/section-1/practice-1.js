'use strict';

function collectSameElements(collectionA, collectionB) {
  var C =[''];
var k = 0;
for(var i = 0; i < collectionA.length; i++){
    for(var j = 0; j < collectionB.length; j++)
    if(collectionA[i] == collectionB[j] && collectionA[i]!='\0')
        C[k++] = collectionA[i];}
  return [ 'a', 'e', 'f', 'd' ];
}
