#include <stdlib.h>
#include <math.h>

int* bestCoordinate(int** towers, int towersSize, int* towersColSize, int radius,
                    int* returnSize) {
    int* res = (int*)malloc(2 * sizeof(int));
    *returnSize = 2;
    int maxSignal = 0;
    res[0] = res[1] = 0;
    for (int x = 0; x <= 50; x++)
        for (int y = 0; y <= 50; y++) {
            int signal = 0;
            for (int i = 0; i < towersSize; i++) {
                double d = sqrt((double)(x - towers[i][0]) * (x - towers[i][0]) +
                                (double)(y - towers[i][1]) * (y - towers[i][1]));
                if (d <= radius)
                    signal += (int)(towers[i][2] / (1 + d));
            }
            if (signal > maxSignal) {
                maxSignal = signal;
                res[0] = x; res[1] = y;
            }
        }
    return res;
}
