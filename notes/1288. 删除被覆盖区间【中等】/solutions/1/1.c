int cmp(const void* a, const void* b) {
    int* ia = *(int**)a;
    int* ib = *(int**)b;
    if (ia[0] != ib[0]) return ia[0] - ib[0];
    return ib[1] - ia[1];
}

int removeCoveredIntervals(int** intervals, int intervalsSize, int* intervalsColSize) {
    qsort(intervals, intervalsSize, sizeof(int*), cmp);
    int count = 0, maxRight = 0;
    for (int i = 0; i < intervalsSize; i++) {
        if (intervals[i][1] > maxRight) {
            count++;
            maxRight = intervals[i][1];
        }
    }
    return count;
}
