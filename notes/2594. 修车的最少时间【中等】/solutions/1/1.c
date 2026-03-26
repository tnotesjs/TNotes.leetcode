long long repairCars(int *ranks, int ranksSize, int cars) {
    long long lo = 1, hi = (long long)ranks[0] * cars * cars;
    while (lo < hi) {
        long long mid = lo + (hi - lo) / 2;
        long long cnt = 0;
        for (int i = 0; i < ranksSize; i++) {
            cnt += (long long)sqrt((double)mid / ranks[i]);
        }
        if (cnt >= cars) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}
