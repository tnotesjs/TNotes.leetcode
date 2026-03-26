int cmp2406(const void* a, const void* b) {
    int* x = (int*)a;
    int* y = (int*)b;
    if (x[0] != y[0]) return x[0] - y[0];
    return x[1] - y[1];
}

int minGroups(int** intervals, int intervalsSize, int* intervalsColSize) {
    int n = intervalsSize;
    int (*events)[2] = malloc(n * 2 * sizeof(int[2]));
    int idx = 0;
    for (int i = 0; i < n; i++) {
        events[idx][0] = intervals[i][0]; events[idx][1] = 1; idx++;
        events[idx][0] = intervals[i][1] + 1; events[idx][1] = -1; idx++;
    }
    qsort(events, idx, sizeof(int[2]), cmp2406);
    int cur = 0, ans = 0;
    for (int i = 0; i < idx; i++) {
        cur += events[i][1];
        if (cur > ans) ans = cur;
    }
    free(events);
    return ans;
}
