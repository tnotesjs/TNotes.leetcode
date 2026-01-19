# [0398. 随机数索引【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0398.%20%E9%9A%8F%E6%9C%BA%E6%95%B0%E7%B4%A2%E5%BC%95%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/random-pick-index/)

给你一个可能含有 重复元素 的整数数组 `nums`，请你随机输出给定的目标数字 `target` 的索引。你可以假设给定的数字一定存在于数组中。

实现 `Solution` 类：

- `Solution(int[] nums)` 用数组 `nums` 初始化对象。
- `int pick(int target)` 从 `nums` 中选出一个满足 `nums[i] == target` 的随机索引 `i`。如果存在多个有效的索引，则每个索引的返回概率应当相等。

示例：

```txt
输入
["Solution", "pick", "pick", "pick"]
[[[1, 2, 3, 3, 3]], [3], [1], [3]]
输出
[null, 4, 0, 2]

解释
Solution solution = new Solution([1, 2, 3, 3, 3]);
solution.pick(3); // 随机返回索引 2, 3 或者 4 之一。每个索引的返回概率应该相等。
solution.pick(1); // 返回 0。因为只有 nums[0] 等于 1。
solution.pick(3); // 随机返回索引 2, 3 或者 4 之一。每个索引的返回概率应该相等。
```

---

提示：

- `1 <= nums.length <= 2 * 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`
- `target` 是 `nums` 中的一个整数
- 最多调用 `pick` 函数 `10^4` 次

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
