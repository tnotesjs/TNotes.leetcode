int cmp2250(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

static int bisectLeft(int *arr, int n, int target) {
    int lo = 0, hi = n;
    while (lo < hi) {
        int mid = (lo + hi) / 2;
        if (arr[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}

int* countRectangles(int** rectangles, int rectanglesSize, int* rectanglesColSize,
                     int** points, int pointsSize, int* pointsColSize, int* returnSize) {
    // 按高度分组
    int *groups[101];
    int gSize[101];
    int gCap[101];
    for (int h = 0; h <= 100; h++) { gSize[h] = 0; gCap[h] = 0; groups[h] = NULL; }
    for (int i = 0; i < rectanglesSize; i++) {
        int h = rectangles[i][1], l = rectangles[i][0];
        if (gSize[h] == gCap[h]) {
            gCap[h] = gCap[h] == 0 ? 8 : gCap[h] * 2;
            groups[h] = (int *)realloc(groups[h], gCap[h] * sizeof(int));
        }
        groups[h][gSize[h]++] = l;
    }
    for (int h = 0; h <= 100; h++) {
        if (gSize[h] > 0) qsort(groups[h], gSize[h], sizeof(int), cmp2250);
    }
    *returnSize = pointsSize;
    int *res = (int *)malloc(pointsSize * sizeof(int));
    for (int i = 0; i < pointsSize; i++) {
        int px = points[i][0], py = points[i][1];
        int count = 0;
        for (int h = py; h <= 100; h++) {
            if (gSize[h] > 0) {
                count += gSize[h] - bisectLeft(groups[h], gSize[h], px);
            }
        }
        res[i] = count;
    }
    for (int h = 0; h <= 100; h++) free(groups[h]);
    return res;
}
