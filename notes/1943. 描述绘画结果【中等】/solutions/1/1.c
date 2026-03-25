#include <stdlib.h>

static int cmp1943(const void* a, const void* b) {
  return ((int*)a)[0] - ((int*)b)[0];
}

long long** splitPainting(int** segments, int segmentsSize, int* segmentsColSize, int* returnSize, int** returnColumnSizes) {
  int cap = segmentsSize * 2;
  int (*ev)[2] = malloc(cap * sizeof(*ev));
  int cnt = 0;
  for (int i = 0; i < segmentsSize; i++) {
    ev[cnt][0] = segments[i][0]; ev[cnt][1] = segments[i][2]; cnt++;
    ev[cnt][0] = segments[i][1]; ev[cnt][1] = -segments[i][2]; cnt++;
  }
  qsort(ev, cnt, sizeof(*ev), cmp1943);
  long long** res = (long long**)malloc(cnt * sizeof(long long*));
  int rSize = 0;
  long long sum = 0;
  for (int i = 0; i < cnt; ) {
    int pos = ev[i][0];
    while (i < cnt && ev[i][0] == pos) { sum += ev[i][1]; i++; }
    if (i < cnt && sum > 0) {
      res[rSize] = (long long*)malloc(3 * sizeof(long long));
      res[rSize][0] = pos; res[rSize][1] = ev[i][0]; res[rSize][2] = sum;
      rSize++;
    }
  }
  *returnSize = rSize;
  *returnColumnSizes = (int*)malloc(rSize * sizeof(int));
  for (int i = 0; i < rSize; i++) (*returnColumnSizes)[i] = 3;
  free(ev);
  return res;
}
