# [0384. 打乱数组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0384.%20%E6%89%93%E4%B9%B1%E6%95%B0%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/shuffle-an-array/)

给你一个整数数组 `nums`，设计算法来打乱一个没有重复元素的数组。打乱后，数组的所有排列应该是 等可能 的。

实现 `Solution` class:

- `Solution(int[] nums)` 使用整数数组 `nums` 初始化对象
- `int[] reset()` 重设数组到它的初始状态并返回
- `int[] shuffle()` 返回数组随机打乱后的结果

---

示例 1：

```txt
输入
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
输出
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

解释
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
solution.reset();      // 重设数组到它的初始状态 [1, 2, 3]。返回 [1, 2, 3]
solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
```

---

提示：

- `1 <= nums.length <= 50`
- `-10^6 <= nums[i] <= 10^6`
- `nums` 中的所有元素都是 唯一的
- 最多可以调用 `10^4` 次 `reset` 和 `shuffle`

## 2. 🎯 s.1 - Fisher-Yates 洗牌

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：`shuffle` $O(n)$，`reset` $O(n)$
- 空间复杂度：$O(n)$，存储原始数组副本

算法思路：

- Fisher-Yates 洗牌：从后往前，第 $i$ 个位置随机与 $[0, i]$ 中某个位置交换
- 保证每种排列出现的概率均等
