#include <stdlib.h>

static int cmp1996(const void* a, const void* b) {
  int* pa = *(int**)a, *pb = *(int**)b;
  if (pa[0] != pb[0]) return pb[0] - pa[0];
  return pa[1] - pb[1];
}

int numberOfWeakCharacters(int** properties, int propertiesSize, int* propertiesColSize) {
  qsort(properties, propertiesSize, sizeof(int*), cmp1996);
  int res = 0, maxDef = 0;
  for (int i = 0; i < propertiesSize; i++) {
    if (properties[i][1] < maxDef) res++;
    else maxDef = properties[i][1];
  }
  return res;
}
