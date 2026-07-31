# [0169. 多数元素【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0169.%20%E5%A4%9A%E6%95%B0%E5%85%83%E7%B4%A0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - Boyer-Moore 投票算法](#2-s1---boyer-moore-投票算法)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/majority-element/)

给定一个大小为 `n` 的数组 `nums`，返回其中的多数元素。多数元素是指在数组中出现次数大于 `⌊ n/2 ⌋` 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

---

示例 1：

```
输入：nums = [3, 2, 3]
输出：3
```

---

示例 2：

```
输入：nums = [2, 2, 1, 1, 1, 2, 2]
输出：2
```

---

提示：

- `n == nums.length`
- `1 <= n <= 5 * 10^4`
- `-10^9 <= nums[i] <= 10^9`

---

进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

## 2. s.1 - Boyer-Moore 投票算法

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度，只需遍历一次数组
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

算法思路：

- 维护一个候选人 candidate 和计数器 count
- 遍历数组：如果 count 为 0，更新候选人；相同元素 count++，不同元素 count--
- 由于多数元素出现次数大于 n/2，最终 candidate 必然是多数元素
