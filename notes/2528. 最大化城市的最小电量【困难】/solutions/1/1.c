long long maxPower(int* stations, int stationsSize, int r, int k) {
    int n = stationsSize;
    long long *initPower = (long long *)malloc(sizeof(long long) * n);
    long long *ps = (long long *)calloc(n + 1, sizeof(long long));
    for (int i = 0; i < n; i++) ps[i + 1] = ps[i] + stations[i];
    for (int i = 0; i < n; i++) {
        int left = i - r > 0 ? i - r : 0;
        int right = i + r < n - 1 ? i + r : n - 1;
        initPower[i] = ps[right + 1] - ps[left];
    }

    long long lo = 0, hi = ps[n] + k;
    long long *diff = (long long *)malloc(sizeof(long long) * (n + 1));
    while (lo < hi) {
        long long mid = lo + (hi - lo + 1) / 2;
        memset(diff, 0, sizeof(long long) * (n + 1));
        long long addSum = 0, remain = k;
        int ok = 1;
        for (int i = 0; i < n; i++) {
            addSum += diff[i];
            long long cur = initPower[i] + addSum;
            if (cur < mid) {
                long long need = mid - cur;
                if (need > remain) { ok = 0; break; }
                remain -= need;
                addSum += need;
                int endIdx = i + 2 * r + 1;
                if (endIdx <= n) diff[endIdx] -= need;
            }
        }
        if (ok) lo = mid;
        else hi = mid - 1;
    }

    free(initPower); free(ps); free(diff);
    return lo;
}
