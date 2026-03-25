#include <stdlib.h>
#include <string.h>

int minMoves(int* nums, int numsSize, int limit) {
    int n = numsSize;
    int sz = 2 * limit + 2;
    int* diff = (int*)calloc(sz + 1, sizeof(int));
    for (int i = 0; i < n / 2; i++) {
        int a = nums[i], b = nums[n-1-i];
        int lo = (a < b ? a : b) + 1;
        int hi = (a > b ? a : b) + limit;
        diff[2] += 2;
        diff[lo] -= 1;
        diff[a+b] -= 1;
        diff[a+b+1] += 1;
        diff[hi+1] += 1;
    }
    int res = n, cur = 0;
    for (int t = 2; t <= 2 * limit; t++) {
        cur += diff[t];
        if (cur < res) res = cur;
    }
    free(diff);
    return res;
}
