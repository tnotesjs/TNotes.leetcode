int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int findMinDifference(char** timePoints, int timePointsSize) {
    int* mins = (int*)malloc(sizeof(int) * timePointsSize);
    for (int i = 0; i < timePointsSize; i++) {
        int h, m;
        sscanf(timePoints[i], "%d:%d", &h, &m);
        mins[i] = h * 60 + m;
    }
    qsort(mins, timePointsSize, sizeof(int), cmp);
    int res = 1440 - mins[timePointsSize - 1] + mins[0];
    for (int i = 1; i < timePointsSize; i++) {
        int diff = mins[i] - mins[i - 1];
        if (diff < res) res = diff;
    }
    free(mins);
    return res;
}
