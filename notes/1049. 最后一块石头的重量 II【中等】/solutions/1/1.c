int lastStoneWeightII(int* stones, int stonesSize) {
    int total = 0;
    for (int i = 0; i < stonesSize; i++) total += stones[i];
    int target = total / 2;
    bool* dp = calloc(target + 1, sizeof(bool));
    dp[0] = true;
    for (int i = 0; i < stonesSize; i++) {
        for (int j = target; j >= stones[i]; j--) {
            dp[j] = dp[j] || dp[j - stones[i]];
        }
    }
    for (int j = target; j >= 0; j--) {
        if (dp[j]) { free(dp); return total - 2 * j; }
    }
    free(dp);
    return total;
}
