int cmp(const void* a, const void* b) {
    int* ra = *(int**)a, *rb = *(int**)b;
    return ra[1] - rb[1];
}

int findMinimumTime(int** tasks, int tasksSize, int* tasksColSize) {
    qsort(tasks, tasksSize, sizeof(int*), cmp);
    int run[2001] = {0};
    for (int i = 0; i < tasksSize; i++) {
        int start = tasks[i][0], end = tasks[i][1], d = tasks[i][2];
        for (int t = start; t <= end; t++) {
            if (run[t]) d--;
        }
        for (int t = end; t >= start && d > 0; t--) {
            if (!run[t]) { run[t] = 1; d--; }
        }
    }
    int ans = 0;
    for (int t = 0; t <= 2000; t++) ans += run[t];
    return ans;
}
