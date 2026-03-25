#include <stdlib.h>

int largestMagicSquare(int** grid, int gridSize, int* gridColSize) {
  int m = gridSize, n = gridColSize[0];
  int** rs = (int**)malloc(m * sizeof(int*));
  int** cs = (int**)malloc((m+1) * sizeof(int*));
  for (int i = 0; i < m; i++) {
    rs[i] = (int*)calloc(n+1, sizeof(int));
    for (int j = 0; j < n; j++) rs[i][j+1] = rs[i][j] + grid[i][j];
  }
  for (int i = 0; i <= m; i++) cs[i] = (int*)calloc(n, sizeof(int));
  for (int i = 0; i < m; i++)
    for (int j = 0; j < n; j++) cs[i+1][j] = cs[i][j] + grid[i][j];
  int maxK = m < n ? m : n;
  for (int k = maxK; k >= 2; k--) {
    for (int i = 0; i+k <= m; i++) {
      for (int j = 0; j+k <= n; j++) {
        int target = rs[i][j+k] - rs[i][j];
        int ok = 1;
        for (int r = i+1; r < i+k && ok; r++)
          if (rs[r][j+k]-rs[r][j] != target) ok = 0;
        for (int c = j; c < j+k && ok; c++)
          if (cs[i+k][c]-cs[i][c] != target) ok = 0;
        if (ok) {
          int d1=0,d2=0;
          for (int d = 0; d < k; d++) { d1+=grid[i+d][j+d]; d2+=grid[i+d][j+k-1-d]; }
          if (d1==target&&d2==target) {
            for(int x=0;x<m;x++)free(rs[x]); free(rs);
            for(int x=0;x<=m;x++)free(cs[x]); free(cs);
            return k;
          }
        }
      }
    }
  }
  for(int x=0;x<m;x++)free(rs[x]); free(rs);
  for(int x=0;x<=m;x++)free(cs[x]); free(cs);
  return 1;
}
