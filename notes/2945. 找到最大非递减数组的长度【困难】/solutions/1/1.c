int findMaximumLength(int* nums, int numsSize) {
    int n = numsSize;
    long long* prefix = (long long*)calloc(n + 1, sizeof(long long));
    for (int i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];

    int* dp = (int*)calloc(n + 1, sizeof(int));
    long long* last = (long long*)calloc(n + 1, sizeof(long long));
    long long* f = (long long*)calloc(n + 1, sizeof(long long));

    int* dq = (int*)malloc((n + 1) * sizeof(int));
    int head = 0, tail = 0;
    dq[tail++] = 0;
    int bestJ = -1;

    for (int i = 1; i <= n; i++) {
        while (head < tail && f[dq[head]] <= prefix[i]) {
            int j = dq[head++];
            if (bestJ == -1 || dp[j] > dp[bestJ] || (dp[j] == dp[bestJ] && prefix[j] > prefix[bestJ])) {
                bestJ = j;
            }
        }
        if (bestJ != -1) {
            dp[i] = dp[bestJ] + 1;
            last[i] = prefix[i] - prefix[bestJ];
        } else {
            dp[i] = 1;
            last[i] = prefix[i];
        }
        f[i] = prefix[i] + last[i];
        while (tail > head && f[dq[tail - 1]] >= f[i] &&
               (dp[dq[tail - 1]] < dp[i] || (dp[dq[tail - 1]] == dp[i] && prefix[dq[tail - 1]] <= prefix[i]))) {
            tail--;
        }
        dq[tail++] = i;
    }

    int res = dp[n];
    free(prefix); free(dp); free(last); free(f); free(dq);
    return res;
}
