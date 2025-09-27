# [2190. 数组中紧跟 key 之后出现最频繁的数字【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2190.%20%E6%95%B0%E7%BB%84%E4%B8%AD%E7%B4%A7%E8%B7%9F%20key%20%E4%B9%8B%E5%90%8E%E5%87%BA%E7%8E%B0%E6%9C%80%E9%A2%91%E7%B9%81%E7%9A%84%E6%95%B0%E5%AD%97%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/most-frequent-number-following-key-in-an-array/)

给你一个下标从 **0** 开始的整数数组 `nums` ，同时给你一个整数 `key` ，它在 `nums` 出现过。

**统计** 在 `nums` 数组中紧跟着 `key` 后面出现的不同整数 `target` 的出现次数。换言之，`target` 的出现次数为满足以下条件的 `i` 的数目：

- `0 <= i <= n - 2`
- `nums[i] == key` 且
- `nums[i + 1] == target` 。

请你返回出现 **最多** 次数的 `target` 。测试数据保证出现次数最多的 `target` 是唯一的。

---

- **示例 1：**

```txt
输入：nums = [1,100,200,1,100], key = 1
输出：100
解释：对于 target = 100 ，在下标 1 和 4 处出现过 2 次，且都紧跟着 key 。
没有其他整数在 key 后面紧跟着出现，所以我们返回 100 。
```

- **示例 2：**

```txt
输入：nums = [2,2,2,2,3], key = 2
输出：2
解释：对于 target = 2 ，在下标 1 ，2 和 3 处出现过 3 次，且都紧跟着 key 。
对于 target = 3 ，在下标 4 出出现过 1 次，且紧跟着 key 。
target = 2 是紧跟着 key 之后出现次数最多的数字，所以我们返回 2 。
```

---

**提示：**

- `2 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`
- 测试数据保证答案是唯一的。

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
