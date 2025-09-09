# [0283. 移动零【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0283.%20%E7%A7%BB%E5%8A%A8%E9%9B%B6%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 双指针](#2--s1---双指针)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/move-zeroes/)

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

**请注意** ，必须在不复制数组的情况下原地对数组进行操作。

**示例 1:**

```
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
```

**示例 2:**

```
输入: nums = [0]
输出: [0]
```

**提示**:

- `1 <= nums.length <= 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`

**进阶：** 你能尽量减少完成的操作次数吗？

## 2. 🎯 s.1 - 双指针

```js
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) continue
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === 0) continue
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      break
    }
  }
}
```

- 实现思路：
  - i 指向 0 的时候，j 找 i 后边第一个不是 0 的跟 i 交换。
