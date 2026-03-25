int maxDistance(int* nums1, int nums1Size, int* nums2, int nums2Size) {
  int ans = 0, i = 0, j = 0;
  while (i < nums1Size && j < nums2Size) {
    if (nums1[i] > nums2[j]) {
      i++;
    } else {
      if (j - i > ans) ans = j - i;
      j++;
    }
  }
  return ans;
}
