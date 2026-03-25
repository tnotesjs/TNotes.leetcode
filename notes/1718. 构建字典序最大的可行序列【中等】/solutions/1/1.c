#include <stdlib.h>
#include <string.h>

static int* gRes1718;
static int* gUsed1718;
static int gLen1718, gN1718;

int bt1718(int idx) {
    if (idx == gLen1718) return 1;
    if (gRes1718[idx] != 0) return bt1718(idx + 1);
    for (int num = gN1718; num >= 1; num--) {
        if (gUsed1718[num]) continue;
        if (num == 1) {
            gRes1718[idx] = 1; gUsed1718[1] = 1;
            if (bt1718(idx + 1)) return 1;
            gRes1718[idx] = 0; gUsed1718[1] = 0;
        } else {
            if (idx + num < gLen1718 && gRes1718[idx + num] == 0) {
                gRes1718[idx] = num; gRes1718[idx + num] = num; gUsed1718[num] = 1;
                if (bt1718(idx + 1)) return 1;
                gRes1718[idx] = 0; gRes1718[idx + num] = 0; gUsed1718[num] = 0;
            }
        }
    }
    return 0;
}

int* constructDistancedSequence(int n, int* returnSize) {
    gLen1718 = 2 * n - 1;
    gN1718 = n;
    gRes1718 = (int*)calloc(gLen1718, sizeof(int));
    gUsed1718 = (int*)calloc(n + 1, sizeof(int));
    bt1718(0);
    *returnSize = gLen1718;
    free(gUsed1718);
    return gRes1718;
}
