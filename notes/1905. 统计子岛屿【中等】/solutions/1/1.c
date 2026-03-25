#include <stdbool.h>

static bool dfs1905(int** g1, int** g2, int m, int n, int i, int j) {
  if (i < 0 || i >= m || j < 0 || j >= n || g2[i][j] == 0) return true;
  g2[i][j] = 0;
  bool res = g1[i][j] == 1;
  res = dfs1905(g1, g2, m, n, i+1, j) && res;
  res = dfs1905(g1, g2, m, n, i-1, j) && res;
  res = dfs1905(g1, g2, m, n, i, j+1) && res;
  res = dfs1905(g1, g2, m, n, i, j-1) && res;
  return res;
}

int countSubIslands(int** grid1, int grid1Size, int* grid1ColSize, int** grid2, int grid2Size, int* grid2ColSize) {
  int m = grid1Size, n = grid1ColSize[0], count = 0;
  for (int i = 0; i < m; i++)
    for (int j = 0; j < n; j++)
      if (grid2[i][j] == 1 && dfs1905(grid1, grid2, m, n, i, j)) count++;
  return count;
}
