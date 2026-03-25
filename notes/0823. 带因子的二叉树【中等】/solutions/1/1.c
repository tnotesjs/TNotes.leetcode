int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int numFactoredBinaryTrees(int* arr, int arrSize) {
    long long MOD = 1000000007;
    qsort(arr, arrSize, sizeof(int), cmp);
    long long* dp = (long long*)calloc(arrSize, sizeof(long long));
    long long res = 0;
    for (int i = 0; i < arrSize; i++) {
        dp[i] = 1;
        for (int j = 0; j < i; j++) {
            if ((long long)arr[j] * arr[j] > arr[i]) break;
            if (arr[i] % arr[j] != 0) continue;
            int target = arr[i] / arr[j];
            int lo = j, hi = i - 1, found = -1;
            while (lo <= hi) {
                int mid = (lo + hi) / 2;
                if (arr[mid] == target) { found = mid; break; }
                if (arr[mid] < target) lo = mid + 1; else hi = mid - 1;
            }
            if (found != -1) {
                long long cnt = dp[j] * dp[found] % MOD;
                if (arr[j] != target) cnt = cnt * 2 % MOD;
                dp[i] = (dp[i] + cnt) % MOD;
            }
        }
        res = (res + dp[i]) % MOD;
    }
    free(dp);
    return (int)res;
}
