#include <stdlib.h>

int* getMaximumXor(int* nums, int numsSize, int maximumBit, int* returnSize) {
  int mask = (1 << maximumBit) - 1;
  int xorVal = 0;
  for (int i = 0; i < numsSize; i++) xorVal ^= nums[i];
  int* ans = (int*)malloc(numsSize * sizeof(int));
  for (int i = numsSize - 1; i >= 0; i--) {
    ans[numsSize - 1 - i] = xorVal ^ mask;
    xorVal ^= nums[i];
  }
  *returnSize = numsSize;
  return ans;
}
