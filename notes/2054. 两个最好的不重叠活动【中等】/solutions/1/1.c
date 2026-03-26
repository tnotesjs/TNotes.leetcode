int cmp2054(const void* a, const void* b) {
    int* x = *(int**)a, *y = *(int**)b;
    return x[1] - y[1];
}

int maxTwoEvents(int** events, int eventsSize, int* eventsColSize) {
    qsort(events, eventsSize, sizeof(int*), cmp2054);
    int* maxVal = (int*)malloc(eventsSize * sizeof(int));
    maxVal[0] = events[0][2];
    for (int i = 1; i < eventsSize; i++) {
        maxVal[i] = maxVal[i - 1] > events[i][2] ? maxVal[i - 1] : events[i][2];
    }
    int ans = maxVal[eventsSize - 1];
    for (int i = 0; i < eventsSize; i++) {
        int start = events[i][0];
        int lo = 0, hi = i - 1, pos = -1;
        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            if (events[mid][1] < start) { pos = mid; lo = mid + 1; }
            else hi = mid - 1;
        }
        int cur = events[i][2] + (pos >= 0 ? maxVal[pos] : 0);
        if (cur > ans) ans = cur;
    }
    free(maxVal);
    return ans;
}
