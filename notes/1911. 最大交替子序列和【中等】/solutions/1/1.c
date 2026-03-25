long long maxAlternatingSum(int* nums, int numsSize) {
  long long even = 0, odd = 0;
  for (int i = 0; i < numsSize; i++) {
    long long ne = even > odd + nums[i] ? even : odd + nums[i];
    long long no = odd > even - nums[i] ? odd : even - nums[i];
    even = ne; odd = no;
  }
  return even;
}
