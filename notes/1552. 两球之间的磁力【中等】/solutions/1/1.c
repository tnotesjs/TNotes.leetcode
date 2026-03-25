int cmpInt(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int maxDistance(int* position, int positionSize, int m) {
    qsort(position, positionSize, sizeof(int), cmpInt);
    int lo = 1, hi = position[positionSize - 1] - position[0];
    while (lo < hi) {
        int mid = lo + (hi - lo + 1) / 2;
        int count = 1, last = position[0];
        for (int i = 1; i < positionSize; i++) {
            if (position[i] - last >= mid) {
                count++;
                last = position[i];
            }
        }
        if (count >= m) lo = mid;
        else hi = mid - 1;
    }
    return lo;
}
