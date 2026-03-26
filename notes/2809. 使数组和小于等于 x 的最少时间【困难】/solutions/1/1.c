int cmpPairs(const void* a, const void* b) {
  return ((int*)a)[1] - ((int*)b)[1];
}

int minimumTime(int* nums1, int nums1Size, int* nums2, int nums2Size, int x) {
  int n = nums1Size;
  long long s1 = 0, s2 = 0;
  for (int i = 0; i < n; i++) { s1 += nums1[i]; s2 += nums2[i]; }
  int (*pairs)[2] = malloc(n * sizeof(int[2]));
  for (int i = 0; i < n; i++) { pairs[i][0] = nums1[i]; pairs[i][1] = nums2[i]; }
  qsort(pairs, n, sizeof(int[2]), cmpPairs);
  long long* dp = calloc(n + 1, sizeof(long long));
  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j >= 1; j--) {
      long long val = dp[j - 1] + pairs[i][0] + (long long)pairs[i][1] * j;
      if (val > dp[j]) dp[j] = val;
    }
  }
  for (int t = 0; t <= n; t++) {
    if (s1 + s2 * t - dp[t] <= x) { free(pairs); free(dp); return t; }
  }
  free(pairs); free(dp);
  return -1;
}
