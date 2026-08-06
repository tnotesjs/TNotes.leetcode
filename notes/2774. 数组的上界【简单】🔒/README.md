# [2774. 数组的上界【简单】🔒](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2774.%20%E6%95%B0%E7%BB%84%E7%9A%84%E4%B8%8A%E7%95%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91%F0%9F%94%92)

<!-- region:toc -->

- [1. 🔗 links](#1--links)
- [2. 📝 题目描述](#2--题目描述)
- [3. 🎯 s.1](#3--s1)

<!-- endregion:toc -->

- [leetcode](https://leetcode.cn/problems/array-upper-bound)

## 1. 🔗 links

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf - MDN，`Array.prototype.indexOf()`

## 2. 📝 题目描述

请你编写代码实现一个数组方法，任何数组都可以调用 `upperBound()` 方法，并返回给定目标数字的 最后 一个索引。`nums` 是一个可能包含重复数字的按升序排序的数组。如果在数组中找不到目标数字，则返回 -1。

示例 1：

- 输入：`nums = [3,4,5], target = 5`
- 输出：`2`
- 解释：目标值的最后一个索引是 `2`

示例 2：

- 输入：`nums = [1,4,5], target = 2`
- 输出：`-1`
- 解释：因为数组中没有数字 2，所以返回 -1。

示例 3：

- 输入：`nums = [3,4,6,6,6,6,7], target = 6`
- 输出：`5`
- 解释：目标值的最后一个索引是 `5`

提示：

- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i], target <= 10^4`
- `nums` 按升序排序。

进阶：你能编写一个时间复杂度为 `O(log n)` 的算法吗？

## 3. 🎯 s.1

```javascript
/**
 * @param {number} target
 * @return {number}
 */
Array.prototype.upperBound = function (target) {
  // 倒序遍历
  const len = this.length
  for (let i = len - 1; i >= 0; i--) {
    if (target === this[i]) return i
  }
  return -1
}

// [3,4,5].upperBound(5); // 2
// [1,4,5].upperBound(2); // -1
// [3,4,6,6,6,6,7].upperBound(6) // 5
```

类似于 `Array.prototype.indexOf()`，不同点在于本题要求从数组的结尾开始找。
