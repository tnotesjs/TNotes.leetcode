#include <stdlib.h>

int* findPeakGrid(int** mat, int matSize, int* matColSize, int* returnSize) {
  int lo = 0, hi = matSize - 1, n = matColSize[0];
  while (lo < hi) {
    int mid = lo + (hi - lo) / 2;
    int maxCol = 0;
    for (int j = 1; j < n; j++)
      if (mat[mid][j] > mat[mid][maxCol]) maxCol = j;
    if (mat[mid][maxCol] < mat[mid + 1][maxCol]) lo = mid + 1;
    else hi = mid;
  }
  int maxCol = 0;
  for (int j = 1; j < n; j++)
    if (mat[lo][j] > mat[lo][maxCol]) maxCol = j;
  int* res = (int*)malloc(2 * sizeof(int));
  res[0] = lo; res[1] = maxCol;
  *returnSize = 2;
  return res;
}
