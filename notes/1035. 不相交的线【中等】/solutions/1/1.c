int maxUncrossedLines(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int m = nums1Size, n = nums2Size;
    int** dp = malloc((m + 1) * sizeof(int*));
    for (int i = 0; i <= m; i++) dp[i] = calloc(n + 1, sizeof(int));
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (nums1[i - 1] == nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = dp[i - 1][j] > dp[i][j - 1] ? dp[i - 1][j] : dp[i][j - 1];
            }
        }
    }
    int res = dp[m][n];
    for (int i = 0; i <= m; i++) free(dp[i]);
    free(dp);
    return res;
}
