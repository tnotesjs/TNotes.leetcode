/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = [];
  const len = nums.length;

  nums.sort((a, b) => a - b); // 升序

  for (let i = 0; i < len - 2; i++) {
    // 跳过重复的数字
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);

        // 跳过重复的数字
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return ans;
};
