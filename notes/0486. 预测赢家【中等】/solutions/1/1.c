bool predictTheWinner(int* nums, int numsSize) {
    int n = numsSize;
    int** dp = (int**)malloc(sizeof(int*) * n);
    for (int i = 0; i < n; i++) {
        dp[i] = (int*)calloc(n, sizeof(int));
        dp[i][i] = nums[i];
    }
    for (int len = 2; len <= n; len++) {
        for (int i = 0; i <= n - len; i++) {
            int j = i + len - 1;
            int a = nums[i] - dp[i + 1][j];
            int b = nums[j] - dp[i][j - 1];
            dp[i][j] = a > b ? a : b;
        }
    }
    bool res = dp[0][n - 1] >= 0;
    for (int i = 0; i < n; i++) free(dp[i]);
    free(dp);
    return res;
}
