int minDays(int* bloomDay, int bloomDaySize, int m, int k) {
    if ((long long)m * k > bloomDaySize) return -1;
    int lo = 1, hi = 0;
    for (int i = 0; i < bloomDaySize; i++)
        if (bloomDay[i] > hi) hi = bloomDay[i];
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        int bouquets = 0, flowers = 0;
        for (int i = 0; i < bloomDaySize; i++) {
            if (bloomDay[i] <= mid) {
                if (++flowers == k) { bouquets++; flowers = 0; }
            } else flowers = 0;
        }
        if (bouquets >= m) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}
