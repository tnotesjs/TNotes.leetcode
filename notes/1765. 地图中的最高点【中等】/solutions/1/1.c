#include <stdlib.h>
#include <string.h>

int** highestPeak(int** isWater, int isWaterSize, int* isWaterColSize, int* returnSize, int** returnColumnSizes) {
  int m = isWaterSize, n = isWaterColSize[0];
  int** height = (int**)malloc(m * sizeof(int*));
  for (int i = 0; i < m; i++) {
    height[i] = (int*)malloc(n * sizeof(int));
    memset(height[i], -1, n * sizeof(int));
  }
  int* qx = (int*)malloc(m * n * sizeof(int));
  int* qy = (int*)malloc(m * n * sizeof(int));
  int head = 0, tail = 0;
  for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
      if (isWater[i][j] == 1) {
        height[i][j] = 0;
        qx[tail] = i;
        qy[tail] = j;
        tail++;
      }
    }
  }
  int dx[] = {0, 0, 1, -1}, dy[] = {1, -1, 0, 0};
  while (head < tail) {
    int x = qx[head], y = qy[head];
    head++;
    for (int d = 0; d < 4; d++) {
      int nx = x + dx[d], ny = y + dy[d];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && height[nx][ny] == -1) {
        height[nx][ny] = height[x][y] + 1;
        qx[tail] = nx;
        qy[tail] = ny;
        tail++;
      }
    }
  }
  free(qx);
  free(qy);
  *returnSize = m;
  *returnColumnSizes = (int*)malloc(m * sizeof(int));
  for (int i = 0; i < m; i++) (*returnColumnSizes)[i] = n;
  return height;
}
