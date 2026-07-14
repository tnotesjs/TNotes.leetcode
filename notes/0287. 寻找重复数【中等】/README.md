# [0287. 寻找重复数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0287.%20%E5%AF%BB%E6%89%BE%E9%87%8D%E5%A4%8D%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 快慢指针](#2-s1---快慢指针)
- [3. 引用](#3-引用)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-duplicate-number/)

给定一个包含 `n + 1` 个整数的数组 `nums`，其数字都在 `[1, n]` 范围内（包括 `1` 和 `n`），可知至少存在一个重复的整数。

假设 `nums` 只有一个重复的整数，返回这个重复的数。

你设计的解决方案必须不修改数组 `nums` 且只用常量级 `O(1)` 的额外空间。

---

示例 1：

```txt
输入：nums = [1, 3, 4, 2, 2]
输出：2
```

---

示例 2：

```txt
输入：nums = [3, 1, 3, 4, 2]
输出：3
```

---

示例 3 :

```txt
输入：nums = [3, 3, 3, 3, 3]
输出：3
```

---

提示：

- `1 <= n <= 10^5`
- `nums.length == n + 1`
- `1 <= nums[i] <= n`
- `nums` 中只有一个整数出现两次或多次，其余整数均只出现一次

---

进阶：

- 如何证明 `nums` 中至少存在一个重复的数字?
- 你可以设计一个线性级时间复杂度 `O(n)` 的解决方案吗？

## 2. s.1 - 快慢指针

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是数组长度
- 空间复杂度：$O(1)$

算法思路：

- 将数组视为链表（索引 $\to$ 值的映射），重复数即环的入口
- Floyd 快慢指针：先找到环内相遇点，再从起点和相遇点同时出发找环入口

## 3. 引用

- [TNotes.algorithms - 0019. Floyd 判圈算法][1]

[1]: https://tnotesjs.github.io/TNotes.algorithms/notes/0019.%20Floyd%20%E5%88%A4%E5%9C%88%E7%AE%97%E6%B3%95/README
