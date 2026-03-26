int* goodSubsetofBinaryMatrix(int** grid, int gridSize, int* gridColSize, int* returnSize) {
    int n = gridColSize[0];
    int maskToRow[32];
    memset(maskToRow, -1, sizeof(maskToRow));
    for (int i = 0; i < gridSize; i++) {
        int mask = 0;
        for (int j = 0; j < n; j++) {
            if (grid[i][j]) mask |= (1 << j);
        }
        if (mask == 0) {
            int* res = (int*)malloc(sizeof(int));
            res[0] = i;
            *returnSize = 1;
            return res;
        }
        if (maskToRow[mask] == -1) maskToRow[mask] = i;
    }
    for (int m1 = 1; m1 < 32; m1++) {
        if (maskToRow[m1] == -1) continue;
        for (int m2 = m1 + 1; m2 < 32; m2++) {
            if (maskToRow[m2] == -1) continue;
            if ((m1 & m2) == 0) {
                int* res = (int*)malloc(2 * sizeof(int));
                int r1 = maskToRow[m1], r2 = maskToRow[m2];
                res[0] = r1 < r2 ? r1 : r2;
                res[1] = r1 < r2 ? r2 : r1;
                *returnSize = 2;
                return res;
            }
        }
    }
    *returnSize = 0;
    return NULL;
}
