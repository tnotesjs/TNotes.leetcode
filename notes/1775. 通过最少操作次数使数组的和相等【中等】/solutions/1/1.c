int minOperations(int* nums1, int nums1Size, int* nums2, int nums2Size) {
  if (nums1Size * 6 < nums2Size || nums2Size * 6 < nums1Size) return -1;
  int sum1 = 0, sum2 = 0;
  for (int i = 0; i < nums1Size; i++) sum1 += nums1[i];
  for (int i = 0; i < nums2Size; i++) sum2 += nums2[i];
  // 确保 sum1 <= sum2
  if (sum1 > sum2) {
    int* tmp = nums1; nums1 = nums2; nums2 = tmp;
    int t = nums1Size; nums1Size = nums2Size; nums2Size = t;
    t = sum1; sum1 = sum2; sum2 = t;
  }
  int diff = sum2 - sum1;
  int cnt[6] = {0};
  for (int i = 0; i < nums1Size; i++) cnt[6 - nums1[i]]++;
  for (int i = 0; i < nums2Size; i++) cnt[nums2[i] - 1]++;
  int ops = 0;
  for (int i = 5; i >= 1 && diff > 0; i--) {
    int use = cnt[i] < (diff + i - 1) / i ? cnt[i] : (diff + i - 1) / i;
    ops += use;
    diff -= use * i;
  }
  return ops;
}
