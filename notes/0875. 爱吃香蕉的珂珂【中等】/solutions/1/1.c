int minEatingSpeed(int* piles, int pilesSize, int h) {
    int lo = 1, hi = 0;
    for (int i = 0; i < pilesSize; i++) if (piles[i] > hi) hi = piles[i];
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        long long hours = 0;
        for (int i = 0; i < pilesSize; i++) hours += (piles[i] + mid - 1) / mid;
        if (hours <= h) hi = mid; else lo = mid + 1;
    }
    return lo;
}
