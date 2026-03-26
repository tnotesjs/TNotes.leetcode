int* closestPrimes(int left, int right, int* returnSize) {
    int *ans = (int *)malloc(sizeof(int) * 2);
    *returnSize = 2;
    char *sieve = (char *)calloc(right + 1, 1);
    sieve[0] = sieve[1] = 1;
    for (int i = 2; (long long)i * i <= right; i++) {
        if (!sieve[i]) {
            for (int j = i * i; j <= right; j += i) sieve[j] = 1;
        }
    }
    int prev = -1, minDiff = right - left + 2;
    ans[0] = ans[1] = -1;
    for (int i = left; i <= right; i++) {
        if (!sieve[i]) {
            if (prev != -1 && i - prev < minDiff) {
                minDiff = i - prev;
                ans[0] = prev;
                ans[1] = i;
            }
            prev = i;
        }
    }
    free(sieve);
    return ans;
}
