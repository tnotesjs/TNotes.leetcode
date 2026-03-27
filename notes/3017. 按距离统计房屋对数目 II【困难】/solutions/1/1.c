#include <stdlib.h>
#include <math.h>

int* countOfPairs(int n, int x, int y, int* returnSize) {
    *returnSize = n;
    int* result = (int*)calloc(n, sizeof(int));
    if (x > y) { int t = x; x = y; y = t; }
    for (int i = 1; i <= n; i++) {
        for (int j = i + 1; j <= n; j++) {
            int direct = j - i;
            int viaXY = abs(i - x) + 1 + abs(j - y);
            int viaYX = abs(i - y) + 1 + abs(j - x);
            int dist = direct;
            if (viaXY < dist) dist = viaXY;
            if (viaYX < dist) dist = viaYX;
            result[dist - 1] += 2;
        }
    }
    return result;
}
