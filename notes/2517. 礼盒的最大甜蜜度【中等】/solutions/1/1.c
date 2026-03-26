int cmp(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

int maximumTastiness(int* price, int priceSize, int k) {
    qsort(price, priceSize, sizeof(int), cmp);
    int lo = 0, hi = price[priceSize - 1] - price[0];
    while (lo < hi) {
        int mid = lo + (hi - lo + 1) / 2;
        int count = 1, prev = price[0];
        for (int i = 1; i < priceSize; i++) {
            if (price[i] - prev >= mid) {
                count++;
                prev = price[i];
            }
        }
        if (count >= k) lo = mid;
        else hi = mid - 1;
    }
    return lo;
}
