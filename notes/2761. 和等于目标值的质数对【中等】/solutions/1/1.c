int **findPrimePairs(int n, int *returnSize, int **returnColumnSizes) {
    char *isPrime = (char *)malloc((n + 1) * sizeof(char));
    memset(isPrime, 1, n + 1);
    isPrime[0] = isPrime[1] = 0;
    for (int i = 2; (long long)i * i <= n; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j <= n; j += i) isPrime[j] = 0;
        }
    }
    int cap = 1000;
    int **res = (int **)malloc(cap * sizeof(int *));
    int cnt = 0;
    for (int x = 2; x <= n / 2; x++) {
        if (isPrime[x] && isPrime[n - x]) {
            if (cnt == cap) {
                cap *= 2;
                res = (int **)realloc(res, cap * sizeof(int *));
            }
            res[cnt] = (int *)malloc(2 * sizeof(int));
            res[cnt][0] = x;
            res[cnt][1] = n - x;
            cnt++;
        }
    }
    *returnSize = cnt;
    *returnColumnSizes = (int *)malloc(cnt * sizeof(int));
    for (int i = 0; i < cnt; i++) (*returnColumnSizes)[i] = 2;
    free(isPrime);
    return res;
}
