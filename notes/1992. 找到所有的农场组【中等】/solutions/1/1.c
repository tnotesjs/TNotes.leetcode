#include <stdlib.h>

int** findFarmland(int** land, int landSize, int* landColSize, int* returnSize, int** returnColumnSizes) {
  int m = landSize, n = landColSize[0];
  int cap = m * n / 4 + 1;
  int** res = (int**)malloc(cap * sizeof(int*));
  int cnt = 0;
  for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
      if (land[i][j] == 1) {
        int r2 = i, c2 = j;
        while (r2 + 1 < m && land[r2 + 1][j] == 1) r2++;
        while (c2 + 1 < n && land[i][c2 + 1] == 1) c2++;
        res[cnt] = (int*)malloc(4 * sizeof(int));
        res[cnt][0] = i; res[cnt][1] = j; res[cnt][2] = r2; res[cnt][3] = c2;
        cnt++;
        for (int r = i; r <= r2; r++)
          for (int c = j; c <= c2; c++) land[r][c] = 0;
      }
    }
  }
  *returnSize = cnt;
  *returnColumnSizes = (int*)malloc(cnt * sizeof(int));
  for (int i = 0; i < cnt; i++) (*returnColumnSizes)[i] = 4;
  return res;
}
