int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int findRadius(int* houses, int housesSize, int* heaters, int heatersSize) {
    qsort(heaters, heatersSize, sizeof(int), cmp);
    int res = 0;
    for (int i = 0; i < housesSize; i++) {
        int h = houses[i];
        int lo = 0, hi = heatersSize - 1;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (heaters[mid] < h) lo = mid + 1;
            else hi = mid;
        }
        int dist = abs(heaters[lo] - h);
        if (lo > 0) {
            int d2 = abs(heaters[lo - 1] - h);
            if (d2 < dist) dist = d2;
        }
        if (dist > res) res = dist;
    }
    return res;
}
