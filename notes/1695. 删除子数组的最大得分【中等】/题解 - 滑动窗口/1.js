/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  const set = new Set();
  let ans = 0,
    left = 0,
    right = 0,
    sum = 0;

  while (right < nums.length) {
    if (!set.has(nums[right])) {
      set.add(nums[right]);
      sum += nums[right];
      ans = Math.max(ans, sum);
      right++;
    } else {
      set.delete(nums[left]);
      sum -= nums[left];
      left++;
    }
  }
  return ans;
};
