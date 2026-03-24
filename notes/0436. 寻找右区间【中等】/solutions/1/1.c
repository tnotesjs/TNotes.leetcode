int cmp(const void* a, const void* b) {
    return ((int*)a)[0] - ((int*)b)[0];
}

int* findRightInterval(int** intervals, int intervalsSize, int* intervalsColSize, int* returnSize) {
    int (*sorted)[2] = malloc(sizeof(int[2]) * intervalsSize);
    for (int i = 0; i < intervalsSize; i++) { sorted[i][0] = intervals[i][0]; sorted[i][1] = i; }
    qsort(sorted, intervalsSize, sizeof(int[2]), cmp);
    int* res = (int*)malloc(sizeof(int) * intervalsSize);
    *returnSize = intervalsSize;
    for (int i = 0; i < intervalsSize; i++) {
        int target = intervals[i][1];
        int lo = 0, hi = intervalsSize;
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if (sorted[mid][0] >= target) hi = mid;
            else lo = mid + 1;
        }
        res[i] = lo < intervalsSize ? sorted[lo][1] : -1;
    }
    free(sorted);
    return res;
}
