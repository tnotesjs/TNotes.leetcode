int cmp(const void* a, const void* b) {
    return (*(int**)a)[1] - (*(int**)b)[1];
}

int eraseOverlapIntervals(int** intervals, int intervalsSize, int* intervalsColSize) {
    qsort(intervals, intervalsSize, sizeof(int*), cmp);
    int count = 0, end = INT_MIN;
    for (int i = 0; i < intervalsSize; i++) {
        if (intervals[i][0] >= end) end = intervals[i][1];
        else count++;
    }
    return count;
}
