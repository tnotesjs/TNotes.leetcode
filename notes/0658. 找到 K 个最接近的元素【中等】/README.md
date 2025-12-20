# [0658. 找到 K 个最接近的元素【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0658.%20%E6%89%BE%E5%88%B0%20K%20%E4%B8%AA%E6%9C%80%E6%8E%A5%E8%BF%91%E7%9A%84%E5%85%83%E7%B4%A0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-k-closest-elements/)

给定一个 排序好 的数组 `arr` ，两个整数 `k` 和 `x` ，从数组中找到最靠近 `x`（两数之差最小）的 `k` 个数。返回的结果必须要是按升序排好的。

整数 `a` 比整数 `b` 更接近 `x` 需要满足：

- `|a - x| < |b - x|` 或者
- `|a - x| == |b - x|` 且 `a < b`

---

- 示例 1：

```txt
输入：arr = [1,2,3,4,5], k = 4, x = 3
输出：[1,2,3,4]
```

- 示例 2：

```txt
输入：arr = [1,1,2,3,4,5], k = 4, x = -1
输出：[1,1,2,3]
```

---

提示：

- `1 <= k <= arr.length`
- `1 <= arr.length <= 10^4`
- `arr` 按 升序 排列
- `-10^4 <= arr[i], x <= 10^4`

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
