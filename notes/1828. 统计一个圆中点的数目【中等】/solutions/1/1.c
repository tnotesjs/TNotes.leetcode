#include <stdlib.h>

int* countPoints(int** points, int pointsSize, int* pointsColSize, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
  int* ans = (int*)calloc(queriesSize, sizeof(int));
  for (int i = 0; i < queriesSize; i++) {
    int cx = queries[i][0], cy = queries[i][1], r = queries[i][2];
    long long r2 = (long long)r * r;
    for (int j = 0; j < pointsSize; j++) {
      long long dx = points[j][0] - cx, dy = points[j][1] - cy;
      if (dx * dx + dy * dy <= r2) ans[i]++;
    }
  }
  *returnSize = queriesSize;
  return ans;
}
