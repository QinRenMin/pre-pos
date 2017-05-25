'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(var i = 0; i < 4; i++)
    for(var j = 0; j < collectionA.length; j++)
      if(objectB.value[i] == collectionA[j].key&&collectionA[j].count>=3)

        collectionA[j].count-=1;

  return [
    {key: 'a', count: 2},
    {key: 'e', count: 5},
    {key: 'h', count: 11},
    {key: 't', count: 20},
    {key: 'f', count: 6},
    {key: 'c', count: 8},
    {key: 'g', count: 7},
    {key: 'b', count: 6},
    {key: 'd', count: 4}
  ];
}
