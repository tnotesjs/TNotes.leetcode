# [1835. 所有数对按位与结果的异或和【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1835.%20%E6%89%80%E6%9C%89%E6%95%B0%E5%AF%B9%E6%8C%89%E4%BD%8D%E4%B8%8E%E7%BB%93%E6%9E%9C%E7%9A%84%E5%BC%82%E6%88%96%E5%92%8C%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-xor-sum-of-all-pairs-bitwise-and/)

列表的 异或和（XOR sum）指对所有元素进行按位 `XOR` 运算的结果。如果列表中仅有一个元素，那么其 异或和 就等于该元素。

- 例如，`[1,2,3,4]` 的 异或和 等于 `1 XOR 2 XOR 3 XOR 4 = 4` ，而 `[3]` 的 异或和 等于 `3` 。

给你两个下标 从 0 开始 计数的数组 `arr1` 和 `arr2` ，两数组均由非负整数组成。

根据每个 `(i, j)` 数对，构造一个由 `arr1[i] AND arr2[j]`（按位 `AND` 运算）结果组成的列表。其中 `0 <= i < arr1.length` 且 `0 <= j < arr2.length` 。

返回上述列表的 异或和 。

---

- 示例 1：

```txt
输入：arr1 = [1,2,3], arr2 = [6,5]
输出：0
解释：列表 = [1 AND 6, 1 AND 5, 2 AND 6, 2 AND 5, 3 AND 6, 3 AND 5] = [0,1,2,0,2,1] ，
异或和 = 0 XOR 1 XOR 2 XOR 0 XOR 2 XOR 1 = 0 。
```

- 示例 2：

```txt
输入：arr1 = [12], arr2 = [4]
输出：4
解释：列表 = [12 AND 4] = [4] ，异或和 = 4 。
```

---

提示：

- `1 <= arr1.length, arr2.length <= 10^5`
- `0 <= arr1[i], arr2[j] <= 10^9`

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
