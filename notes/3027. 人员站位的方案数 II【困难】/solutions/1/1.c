#include <stdlib.h>

int cmp(const void* a, const void* b) {
    int* pa = *(int**)a;
    int* pb = *(int**)b;
    if (pa[0] != pb[0]) return pa[0] - pb[0];
    return pb[1] - pa[1];
}

int numberOfPairs(int** points, int pointsSize, int* pointsColSize) {
    qsort(points, pointsSize, sizeof(int*), cmp);
    int ans = 0;
    for (int i = 0; i < pointsSize; i++) {
        int maxY = -1000000001;
        for (int j = i + 1; j < pointsSize; j++) {
            if (points[j][1] <= points[i][1] && points[j][1] > maxY) {
                ans++;
                maxY = points[j][1];
            }
        }
    }
    return ans;
}
