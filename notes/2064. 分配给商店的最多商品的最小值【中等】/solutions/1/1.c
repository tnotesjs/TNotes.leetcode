int minimizedMaximum(int n, int* quantities, int quantitiesSize) {
    int lo = 1, hi = 0;
    for (int i = 0; i < quantitiesSize; i++) {
        if (quantities[i] > hi) hi = quantities[i];
    }
    while (lo < hi) {
        int mid = (lo + hi) / 2;
        int cnt = 0;
        for (int i = 0; i < quantitiesSize; i++) {
            cnt += (quantities[i] + mid - 1) / mid;
        }
        if (cnt <= n) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}
