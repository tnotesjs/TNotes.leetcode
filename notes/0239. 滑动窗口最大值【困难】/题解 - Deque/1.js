/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const deque = []; // 用于维护成员索引的一个双端队列
  const max = []; // 存储每个窗口的最大值

  for (let i = 0; i < nums.length; i++) {
    // 1. 把溢出窗口尺寸的成员移除
    if (deque.length > 0 && deque[0] < i - k + 1) deque.shift();

    // 2. 确保 deque 中存放的索引对应的成员是非严格递减（<）、严格递减（<=）
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i])
      deque.pop();

    // 3. 把当前项加入到 deque 中
    deque.push(i);

    // 4. 将 deque[0] 丢到 max 里边
    if (i >= k - 1) max.push(nums[deque[0]]);
  }

  return max;
};
