/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const n = nums.length;
    let ans = 0;
    // 枚举核心值 c，对应索引为 c, 4c, 9c, 16c, ...
    for (let c = 1; c <= n; c++) {
        let sum = 0;
        for (let j = 1; c * j * j <= n; j++) {
            sum += nums[c * j * j - 1];
        }
        ans = Math.max(ans, sum);
    }
    return ans;
};
