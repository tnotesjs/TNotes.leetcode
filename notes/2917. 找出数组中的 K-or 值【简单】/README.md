# [2917. 找出数组中的 K-or 值【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2917.%20%E6%89%BE%E5%87%BA%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%20K-or%20%E5%80%BC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-k-or-of-an-array/)

给你一个整数数组 `nums` 和一个整数 `k` 。让我们通过扩展标准的按位或来介绍 K-or 操作。在 K-or 操作中，如果在 `nums` 中，至少存在 `k` 个元素的第 `i` 位值为 1 ，那么 K-or 中的第 `i` 位的值是 1 。

返回 `nums` 的 K-or 值。

---

- 示例 1：

```txt
输入：nums = [7,12,9,8,9,15], k = 4
输出：9
```

- 解释：
  - 用二进制表示 numbers：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-20-53-21.png)
  - 位 0 在 7, 9, 9, 15 中为 1。位 3 在 12, 9, 8, 9, 15 中为 1。 只有位 0 和 3 满足。结果是 (1001)2 = 9。

---

- 示例 2：

```txt
输入：nums = [2,12,1,11,4,5], k = 6
输出：0

解释：
没有位在所有 6 个数字中都为 1，如 k = 6 所需要的。
所以，答案为 0。
```

---

- 示例 3：

```txt
输入：nums = [10,8,5,9,11,6,8], k = 1
输出：15

解释：
因为 k == 1 ，数组的 1-or 等于其中所有元素按位或运算的结果。
因此，答案为 10 OR 8 OR 5 OR 9 OR 11 OR 6 OR 8 = 15 。
```

---

提示：

- `1 <= nums.length <= 50`
- `0 <= nums[i] < 2^31`
- `1 <= k <= nums.length`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
