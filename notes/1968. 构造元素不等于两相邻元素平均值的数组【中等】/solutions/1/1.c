#include <stdlib.h>

static int cmp1968(const void* a, const void* b) {
  return *(int*)a - *(int*)b;
}

int* rearrangeArray(int* nums, int numsSize, int* returnSize) {
  *returnSize = numsSize;
  int* res = (int*)malloc(numsSize * sizeof(int));
  for (int i = 0; i < numsSize; i++) res[i] = nums[i];
  qsort(res, numsSize, sizeof(int), cmp1968);
  for (int i = 1; i < numsSize - 1; i += 2) {
    int t = res[i]; res[i] = res[i + 1]; res[i + 1] = t;
  }
  return res;
}
