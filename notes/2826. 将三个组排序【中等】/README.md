# [2826. 将三个组排序【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2826.%20%E5%B0%86%E4%B8%89%E4%B8%AA%E7%BB%84%E6%8E%92%E5%BA%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sorting-three-groups/)

给你一个整数数组 `nums`。`nums` 的每个元素是 1，2 或 3。在每次操作中，你可以删除 `nums` 中的一个元素。返回使 nums 成为 非递减 顺序所需操作数的 最小值。

---

- 示例 1：

```txt
输入：nums = [2,1,3,2,1]
输出：3
解释：
其中一个最优方案是删除 nums[0]，nums[2] 和 nums[3]。
```

---

- 示例 2：

```txt
输入：nums = [1,3,2,1,3,3]
输出：2
解释：
其中一个最优方案是删除 nums[1] 和 nums[2]。
```

---

- 示例 3：

```txt
输入：nums = [2,2,2,2,3,3]
输出：0
解释：
nums 已是非递减顺序的。
```

---

提示：

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 3`

进阶：你可以使用 `O(n)` 时间复杂度以内的算法解决吗？

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
