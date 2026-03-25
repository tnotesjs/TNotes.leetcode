#include <stdlib.h>
#include <stdbool.h>

int cmp1630(const void* a, const void* b) { return *(int*)a - *(int*)b; }

bool* checkArithmeticSubarrays(int* nums, int numsSize, int* l, int lSize,
                               int* r, int rSize, int* returnSize) {
    *returnSize = lSize;
    bool* res = (bool*)malloc(lSize * sizeof(bool));
    int* buf = (int*)malloc(numsSize * sizeof(int));
    for (int q = 0; q < lSize; q++) {
        int len = r[q] - l[q] + 1;
        memcpy(buf, nums + l[q], len * sizeof(int));
        qsort(buf, len, sizeof(int), cmp1630);
        int diff = buf[1] - buf[0];
        res[q] = true;
        for (int i = 2; i < len; i++)
            if (buf[i] - buf[i-1] != diff) { res[q] = false; break; }
    }
    free(buf);
    return res;
}
