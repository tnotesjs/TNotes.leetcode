int change(int amount, int* coins, int coinsSize) {
    int* dp = (int*)calloc(amount + 1, sizeof(int));
    dp[0] = 1;
    for (int k = 0; k < coinsSize; k++)
        for (int i = coins[k]; i <= amount; i++)
            dp[i] += dp[i - coins[k]];
    int res = dp[amount];
    free(dp);
    return res;
}
