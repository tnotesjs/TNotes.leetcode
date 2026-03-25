#include <stdlib.h>

int* findBall(int** grid, int gridSize, int* gridColSize, int* returnSize) {
    int m = gridSize, n = gridColSize[0];
    int* res = (int*)malloc(n * sizeof(int));
    *returnSize = n;
    for (int j = 0; j < n; j++) {
        int col = j;
        for (int i = 0; i < m; i++) {
            int d = grid[i][col];
            int next = col + d;
            if (next < 0 || next >= n || grid[i][next] != d) { col = -1; break; }
            col = next;
        }
        res[j] = col;
    }
    return res;
}
