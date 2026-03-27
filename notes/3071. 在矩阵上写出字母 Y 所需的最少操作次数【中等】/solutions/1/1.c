#include <string.h>

int minimumOperationsToWriteY(int** grid, int gridSize, int* gridColSize) {
    int n = gridSize, mid = n / 2;
    int yCount[3] = {0}, nCount[3] = {0};
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            int v = grid[i][j];
            int isY = (i <= mid && (j == i || j == n - 1 - i)) || (i >= mid && j == mid);
            if (isY) yCount[v]++;
            else nCount[v]++;
        }
    }
    int yTotal = yCount[0] + yCount[1] + yCount[2];
    int nTotal = nCount[0] + nCount[1] + nCount[2];
    int minOps = yTotal + nTotal;
    for (int a = 0; a < 3; a++) {
        for (int b = 0; b < 3; b++) {
            if (a == b) continue;
            int ops = (yTotal - yCount[a]) + (nTotal - nCount[b]);
            if (ops < minOps) minOps = ops;
        }
    }
    return minOps;
}
