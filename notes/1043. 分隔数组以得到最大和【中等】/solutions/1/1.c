int maxSumAfterPartitioning(int* arr, int arrSize, int k) {
    int* dp = calloc(arrSize + 1, sizeof(int));
    for (int i = 1; i <= arrSize; i++) {
        int maxVal = 0;
        for (int j = 1; j <= (i < k ? i : k); j++) {
            if (arr[i - j] > maxVal) maxVal = arr[i - j];
            int val = dp[i - j] + maxVal * j;
            if (val > dp[i]) dp[i] = val;
        }
    }
    int res = dp[arrSize];
    free(dp);
    return res;
}
