#include <stdlib.h>

int cmp1679(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int maxOperations(int* nums, int numsSize, int k) {
    qsort(nums, numsSize, sizeof(int), cmp1679);
    int l = 0, r = numsSize - 1, res = 0;
    while (l < r) {
        int s = nums[l] + nums[r];
        if (s == k) { res++; l++; r--; }
        else if (s < k) l++;
        else r--;
    }
    return res;
}
