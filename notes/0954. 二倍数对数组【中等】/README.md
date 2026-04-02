# [0954. 二倍数对数组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0954.%20%E4%BA%8C%E5%80%8D%E6%95%B0%E5%AF%B9%E6%95%B0%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 排序 + 贪心](#2--s1---排序--贪心)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/array-of-doubled-pairs/)

给定一个长度为偶数的整数数组 `arr`，只有对 `arr` 进行重组后可以满足 “对于每个 `0 <= i < len(arr) / 2`，都有 `arr[2 * i + 1] = 2 * arr[2 * i]`” 时，返回 `true`；否则，返回 `false`。

---

示例 1：

```txt
输入：arr = [3,1,3,6]
输出：false
```

示例 2：

```txt
输入：arr = [2,1,2,6]
输出：false
```

示例 3：

```txt
输入：arr = [4,-2,2,-4]
输出：true
解释：可以用 [-2,-4] 和 [2,4] 这两组组成 [-2,-4,2,4] 或是 [2,4,-2,-4]
```

---

提示：

- `0 <= arr.length <= 3 * 10^4`
- `arr.length` 是偶数
- `-10^5 <= arr[i] <= 10^5`

## 2. 🎯 s.1 - 排序 + 贪心

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$，排序为主要开销
- 空间复杂度：$O(n)$，哈希表计数

算法思路：

- 按绝对值排序数组，贪心地从最小绝对值开始配对
- 对每个未配对的元素 x，尝试找到 2x 进行配对
- 若找不到则返回 false
