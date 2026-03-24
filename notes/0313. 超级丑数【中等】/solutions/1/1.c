int nthSuperUglyNumber(int n, int* primes, int primesSize) {
    long* dp = (long*)malloc(sizeof(long) * n);
    dp[0] = 1;
    int* pointers = (int*)calloc(primesSize, sizeof(int));
    for (int i = 1; i < n; i++) {
        long mn = LONG_MAX;
        for (int j = 0; j < primesSize; j++) {
            long val = dp[pointers[j]] * primes[j];
            if (val < mn) mn = val;
        }
        dp[i] = mn;
        for (int j = 0; j < primesSize; j++) {
            if (dp[pointers[j]] * primes[j] == mn) pointers[j]++;
        }
    }
    int res = (int)dp[n - 1];
    free(dp); free(pointers);
    return res;
}
