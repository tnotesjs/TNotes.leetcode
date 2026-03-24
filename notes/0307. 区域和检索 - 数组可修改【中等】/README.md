# [0307. 区域和检索 - 数组可修改【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0307.%20%E5%8C%BA%E5%9F%9F%E5%92%8C%E6%A3%80%E7%B4%A2%20-%20%E6%95%B0%E7%BB%84%E5%8F%AF%E4%BF%AE%E6%94%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/range-sum-query-mutable/)

给你一个数组 `nums`，请你完成两类查询。

1. 其中一类查询要求 更新 数组 `nums` 下标对应的值
2. 另一类查询要求返回数组 `nums` 中索引 `left` 和索引 `right` 之间（ 包含 ）的 nums 元素的 和，其中 `left <= right`

实现 `NumArray` 类：

- `NumArray(int[] nums)` 用整数数组 `nums` 初始化对象
- `void update(int index, int val)` 将 `nums[index]` 的值 更新 为 `val`
- `int sumRange(int left, int right)` 返回数组 `nums` 中索引 `left` 和索引 `right` 之间（ 包含 ）的 nums 元素的 和 （即，`nums[left] + nums[left + 1], ..., nums[right]`）

---

示例 1：

```txt
输入：
["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
输出：
[null, 9, null, 8]

解释：
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // 返回 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1,2,5]
numArray.sumRange(0, 2); // 返回 1 + 2 + 5 = 8
```

---

提示：

- `1 <= nums.length <= 3 * 10^4`
- `-100 <= nums[i] <= 100`
- `0 <= index < nums.length`
- `-100 <= val <= 100`
- `0 <= left <= right < nums.length`
- 调用 `update` 和 `sumRange` 方法次数不大于 `3 * 10^4`

## 2. 🎯 s.1 - 树状数组

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：初始化 $O(n \log n)$，`update` 和 `sumRange` 均为 $O(\log n)$
- 空间复杂度：$O(n)$

算法思路：

- 使用树状数组（Binary Indexed Tree）维护前缀和
- `update` 时从当前索引向上更新所有包含该元素的节点
- `sumRange` 通过两次前缀和查询相减得到区间和
