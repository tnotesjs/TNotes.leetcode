#include <stdlib.h>

int** rotateGrid(int** grid, int gridSize, int* gridColSize, int k, int* returnSize, int** returnColumnSizes) {
  int m = gridSize, n = gridColSize[0];
  int layers = (m < n ? m : n) / 2;
  for (int layer = 0; layer < layers; layer++) {
    int r1 = layer, c1 = layer, r2 = m-1-layer, c2 = n-1-layer;
    int len = 2*(r2-r1)+2*(c2-c1);
    int* ring = (int*)malloc(len*sizeof(int));
    int idx = 0;
    for (int c = c1; c < c2; c++) ring[idx++] = grid[r1][c];
    for (int r = r1; r < r2; r++) ring[idx++] = grid[r][c2];
    for (int c = c2; c > c1; c--) ring[idx++] = grid[r2][c];
    for (int r = r2; r > r1; r--) ring[idx++] = grid[r][c1];
    int shift = k % len;
    idx = shift;
    for (int c = c1; c < c2; c++) { grid[r1][c] = ring[idx%len]; idx++; }
    for (int r = r1; r < r2; r++) { grid[r][c2] = ring[idx%len]; idx++; }
    for (int c = c2; c > c1; c--) { grid[r2][c] = ring[idx%len]; idx++; }
    for (int r = r2; r > r1; r--) { grid[r][c1] = ring[idx%len]; idx++; }
    free(ring);
  }
  *returnSize = m;
  *returnColumnSizes = (int*)malloc(m*sizeof(int));
  for (int i = 0; i < m; i++) (*returnColumnSizes)[i] = n;
  return grid;
}
