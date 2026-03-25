#include <stdlib.h>

#define MOD1818 1000000007

int cmp1818(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int minAbsoluteSumDiff(int* nums1, int nums1Size, int* nums2, int nums2Size) {
  int n = nums1Size;
  int* sorted = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) sorted[i] = nums1[i];
  qsort(sorted, n, sizeof(int), cmp1818);
  long long totalDiff = 0;
  int maxImprove = 0;
  for (int i = 0; i < n; i++) {
    int diff = abs(nums1[i] - nums2[i]);
    totalDiff += diff;
    int lo = 0, hi = n - 1;
    while (lo < hi) {
      int mid = (lo + hi) / 2;
      if (sorted[mid] < nums2[i]) lo = mid + 1;
      else hi = mid;
    }
    int best = abs(sorted[lo] - nums2[i]);
    if (lo > 0) {
      int t = abs(sorted[lo - 1] - nums2[i]);
      if (t < best) best = t;
    }
    int improve = diff - best;
    if (improve > maxImprove) maxImprove = improve;
  }
  free(sorted);
  return (int)((totalDiff - maxImprove) % MOD1818 + MOD1818) % MOD1818;
}
