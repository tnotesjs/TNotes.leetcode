int cmp(const void* a, const void* b) {
    int ra = (*(int**)a)[1], rb = (*(int**)b)[1];
    return ra < rb ? -1 : ra > rb ? 1 : 0;
}

int findMinArrowShots(int** points, int pointsSize, int* pointsColSize) {
    qsort(points, pointsSize, sizeof(int*), cmp);
    int arrows = 1;
    int end = points[0][1];
    for (int i = 1; i < pointsSize; i++) {
        if (points[i][0] > end) {
            arrows++;
            end = points[i][1];
        }
    }
    return arrows;
}
