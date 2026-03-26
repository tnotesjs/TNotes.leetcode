long long gridGame(int** grid, int gridSize, int* gridColSize) {
    int n = gridColSize[0];
    long long topSum = 0;
    for (int i = 0; i < n; i++) topSum += grid[0][i];
    long long bottomSum = 0, ans = (long long)2e18;
    for (int j = 0; j < n; j++) {
        topSum -= grid[0][j];
        long long cur = topSum > bottomSum ? topSum : bottomSum;
        if (cur < ans) ans = cur;
        bottomSum += grid[1][j];
    }
    return ans;
}
