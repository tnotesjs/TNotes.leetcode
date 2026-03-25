#include <stdlib.h>

int cmp1887(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int reductionOperations(int* nums, int numsSize) {
  qsort(nums, numsSize, sizeof(int), cmp1887);
  int ans = 0, count = 0;
  for (int i = 1; i < numsSize; i++) {
    if (nums[i] != nums[i - 1]) count++;
    ans += count;
  }
  return ans;
}
