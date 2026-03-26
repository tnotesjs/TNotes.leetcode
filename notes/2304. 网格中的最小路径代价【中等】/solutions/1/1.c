int minPathCost(int** grid, int gridSize, int* gridColSize, int** moveCost, int moveCostSize, int* moveCostColSize) {
    int m = gridSize, n = gridColSize[0];
    int* dp = (int*)malloc(n * sizeof(int));
    int* ndp = (int*)malloc(n * sizeof(int));
    for (int j = 0; j < n; j++) dp[j] = grid[0][j];
    for (int i = 1; i < m; i++) {
        for (int k = 0; k < n; k++) ndp[k] = INT_MAX;
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                int cost = dp[j] + moveCost[grid[i - 1][j]][k] + grid[i][k];
                if (cost < ndp[k]) ndp[k] = cost;
            }
        }
        int* tmp = dp; dp = ndp; ndp = tmp;
    }
    int res = dp[0];
    for (int j = 1; j < n; j++) {
        if (dp[j] < res) res = dp[j];
    }
    free(dp);
    free(ndp);
    return res;
}
