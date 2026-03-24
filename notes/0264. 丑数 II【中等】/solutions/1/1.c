int nthUglyNumber(int n) {
    int* dp = (int*)malloc(sizeof(int) * n);
    dp[0] = 1;
    int p2 = 0, p3 = 0, p5 = 0;
    for (int i = 1; i < n; i++) {
        long a = (long)dp[p2] * 2, b = (long)dp[p3] * 3, c = (long)dp[p5] * 5;
        long mn = a < b ? a : b;
        mn = mn < c ? mn : c;
        dp[i] = (int)mn;
        if (dp[i] == a) p2++;
        if (dp[i] == b) p3++;
        if (dp[i] == c) p5++;
    }
    int res = dp[n - 1];
    free(dp);
    return res;
}
