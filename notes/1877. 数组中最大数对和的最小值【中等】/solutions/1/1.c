#include <stdlib.h>

int cmp1877(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int minPairSum(int* nums, int numsSize) {
  qsort(nums, numsSize, sizeof(int), cmp1877);
  int ans = 0;
  for (int i = 0; i < numsSize / 2; i++) {
    int s = nums[i] + nums[numsSize - 1 - i];
    if (s > ans) ans = s;
  }
  return ans;
}
