int maximumCandies(int* candies, int candiesSize, long long k) {
    int lo = 0, hi = 0;
    for (int i = 0; i < candiesSize; i++) {
        if (candies[i] > hi) hi = candies[i];
    }
    while (lo < hi) {
        int mid = lo + (hi - lo + 1) / 2;
        long long count = 0;
        for (int i = 0; i < candiesSize; i++) {
            count += candies[i] / mid;
        }
        if (count >= k) lo = mid;
        else hi = mid - 1;
    }
    return lo;
}
