int minAbsoluteDifference(int* nums, int numsSize, int x) {
  int* sorted = (int*)malloc(numsSize * sizeof(int));
  int sortedSize = 0;
  int ans = INT_MAX;
  for (int i = x; i < numsSize; i++) {
    int val = nums[i - x];
    int lo = 0, hi = sortedSize;
    while (lo < hi) {
      int mid = (lo + hi) / 2;
      if (sorted[mid] < val) lo = mid + 1;
      else hi = mid;
    }
    memmove(sorted + lo + 1, sorted + lo, (sortedSize - lo) * sizeof(int));
    sorted[lo] = val;
    sortedSize++;
    int target = nums[i];
    lo = 0; hi = sortedSize;
    while (lo < hi) {
      int mid = (lo + hi) / 2;
      if (sorted[mid] < target) lo = mid + 1;
      else hi = mid;
    }
    if (lo < sortedSize && sorted[lo] - target < ans) ans = sorted[lo] - target;
    if (lo > 0 && target - sorted[lo - 1] < ans) ans = target - sorted[lo - 1];
  }
  free(sorted);
  return ans;
}
