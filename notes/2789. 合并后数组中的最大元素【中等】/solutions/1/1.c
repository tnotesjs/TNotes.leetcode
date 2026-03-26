long long maxArrayValue(int* nums, int numsSize) {
  long long sum = nums[numsSize - 1];
  for (int i = numsSize - 2; i >= 0; i--) {
    sum = nums[i] <= sum ? sum + nums[i] : nums[i];
  }
  return sum;
}
