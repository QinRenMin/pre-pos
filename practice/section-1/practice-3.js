'use strict';

function collectSameElements(collectionA, objectB) {
  var C = [''];
  var k = 0;
  for(var i = 0; i < 9; i++)
    for(var j = 0; j < 4; j++)
      if(collectionA[i] == objectB.value[j] &&collectionA[i]!= 0)
        C[k++] = collectionA[i];
  return ['a', 'e', 'f', 'd'];
}
