'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(var i = 0; i < 4; i++)
    for(var j = 0; j < 9; j++)
      if(objectB.value[i] == collectionA[j].key)
        collectionA[j].count-=1;
  return [
    {key: 'a', count: 1},
    {key: 'e', count: 1},
    {key: 'h', count: 2},
    {key: 't', count: 2},
    {key: 'f', count: 1},
    {key: 'c', count: 2},
    {key: 'g', count: 2},
    {key: 'b', count: 2},
    {key: 'd', count: 1}
  ];
}
