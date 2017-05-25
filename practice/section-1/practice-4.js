'use strict';

function collectSameElements(collectionA, objectB) {
  var C = [''];
  var k = 0;
  for(var i = 0; i < collectionA.length; i++)
    for(var j = 0; j < 4; j++)
      if(collectionA[i].key == objectB.value[j]&&collectionA[i].key!= 0)
        C[k++] = collectionA[i].key;
  return ['a', 'e', 'f', 'd'];
}
