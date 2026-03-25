#include <stdlib.h>

int cmp1838(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int maxFrequency(int* nums, int numsSize, int k) {
  qsort(nums, numsSize, sizeof(int), cmp1838);
  int ans = 1, left = 0;
  long long sum = 0;
  for (int right = 1; right < numsSize; right++) {
    sum += (long long)(nums[right] - nums[right - 1]) * (right - left);
    while (sum > k) {
      sum -= nums[right] - nums[left];
      left++;
    }
    if (right - left + 1 > ans) ans = right - left + 1;
  }
  return ans;
}
