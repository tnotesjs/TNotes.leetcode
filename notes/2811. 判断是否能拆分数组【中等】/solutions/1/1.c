bool canSplitArray(int* nums, int numsSize, int m) {
  if (numsSize <= 2) return true;
  for (int i = 0; i < numsSize - 1; i++) {
    if (nums[i] + nums[i + 1] >= m) return true;
  }
  return false;
}
