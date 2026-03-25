#include <stdlib.h>

int cmp1878(const void* a, const void* b) { return *(int*)b - *(int*)a; }

int* getBiggestThree(int** grid, int gridSize, int* gridColSize, int* returnSize) {
  int m = gridSize, n = gridColSize[0];
  int cap = m * n * 50;
  int* vals = (int*)malloc(cap * sizeof(int));
  int vSize = 0;
  for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
      vals[vSize++] = grid[i][j];
      int maxK = i < m - 1 - i ? i : m - 1 - i;
      if (j < maxK) maxK = j;
      if (n - 1 - j < maxK) maxK = n - 1 - j;
      for (int k = 1; k <= maxK; k++) {
        int sum = 0;
        for (int d = 0; d < k; d++) {
          sum += grid[i - k + d][j - d] + grid[i - k + d][j + d];
          sum += grid[i + k - d][j - d] + grid[i + k - d][j + d];
        }
        sum -= grid[i - k][j] + grid[i + k][j];
        vals[vSize++] = sum;
      }
    }
  }
  qsort(vals, vSize, sizeof(int), cmp1878);
  // 去重取前3
  int* ans = (int*)malloc(3 * sizeof(int));
  int cnt = 0;
  for (int i = 0; i < vSize && cnt < 3; i++) {
    if (i == 0 || vals[i] != vals[i - 1]) ans[cnt++] = vals[i];
  }
  free(vals);
  *returnSize = cnt;
  return ans;
}
