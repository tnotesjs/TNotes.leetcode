int maximizeWin(int* prizePositions, int prizePositionsSize, int k) {
    int n = prizePositionsSize;
    int* dp = (int*)calloc(n + 1, sizeof(int));
    int ans = 0, left = 0;
    for (int right = 0; right < n; right++) {
        while (prizePositions[right] - prizePositions[left] > k) left++;
        int cnt = right - left + 1;
        dp[right + 1] = dp[right] > cnt ? dp[right] : cnt;
        int cur = cnt + dp[left];
        if (cur > ans) ans = cur;
    }
    free(dp);
    return ans;
}
