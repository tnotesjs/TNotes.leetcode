int minimumTotal(int** triangle, int triangleSize, int* triangleColSize) {
    int* dp = (int*)malloc(triangleSize * sizeof(int));
    for (int j = 0; j < triangleSize; j++)
        dp[j] = triangle[triangleSize - 1][j];

    for (int i = triangleSize - 2; i >= 0; i--) {
        for (int j = 0; j <= i; j++) {
            dp[j] = triangle[i][j] + (dp[j] < dp[j + 1] ? dp[j] : dp[j + 1]);
        }
    }

    int res = dp[0];
    free(dp);
    return res;
}
