int countCompleteSubarrays(int* nums, int numsSize) {
  int freq[2001] = {0};
  int total = 0;
  for (int i = 0; i < numsSize; i++) {
    if (freq[nums[i]]++ == 0) total++;
  }
  memset(freq, 0, sizeof(freq));
  int ans = 0, left = 0, distinct = 0;
  for (int right = 0; right < numsSize; right++) {
    if (freq[nums[right]]++ == 0) distinct++;
    while (distinct == total) {
      ans += numsSize - right;
      if (--freq[nums[left]] == 0) distinct--;
      left++;
    }
  }
  return ans;
}
