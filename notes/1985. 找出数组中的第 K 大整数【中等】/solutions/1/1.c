#include <stdlib.h>
#include <string.h>

static int cmp1985(const void* a, const void* b) {
  const char* sa = *(const char**)a;
  const char* sb = *(const char**)b;
  int la = strlen(sa), lb = strlen(sb);
  if (la != lb) return la - lb;
  return strcmp(sa, sb);
}

char* kthLargestNumber(char** nums, int numsSize, int k) {
  qsort(nums, numsSize, sizeof(char*), cmp1985);
  return nums[numsSize - k];
}
