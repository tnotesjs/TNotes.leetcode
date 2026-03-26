int findValidSplit(int* nums, int numsSize) {
    int n = numsSize;
    int* last = (int*)calloc(1000001, sizeof(int));
    int** factors = (int**)malloc(n * sizeof(int*));
    int* fcount = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) {
        int buf[20], cnt = 0;
        int x = nums[i];
        for (int p = 2; (long long)p * p <= x; p++) {
            if (x % p == 0) {
                buf[cnt++] = p;
                while (x % p == 0) x /= p;
            }
        }
        if (x > 1) buf[cnt++] = x;
        factors[i] = (int*)malloc(cnt * sizeof(int));
        memcpy(factors[i], buf, cnt * sizeof(int));
        fcount[i] = cnt;
        for (int j = 0; j < cnt; j++) last[buf[j]] = i;
    }
    int maxEnd = 0, ans = -1;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < fcount[i]; j++) {
            if (last[factors[i][j]] > maxEnd) maxEnd = last[factors[i][j]];
        }
        if (maxEnd == i) { ans = i; break; }
    }
    for (int i = 0; i < n; i++) free(factors[i]);
    free(factors); free(fcount); free(last);
    return ans;
}
