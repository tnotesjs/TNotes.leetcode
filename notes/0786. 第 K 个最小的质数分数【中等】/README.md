# [0786. 第 K 个最小的质数分数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0786.%20%E7%AC%AC%20K%20%E4%B8%AA%E6%9C%80%E5%B0%8F%E7%9A%84%E8%B4%A8%E6%95%B0%E5%88%86%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/k-th-smallest-prime-fraction/)

给你一个按递增顺序排序的数组 `arr` 和一个整数 `k`。数组 `arr` 由 `1` 和若干 质数 组成，且其中所有整数互不相同。

对于每对满足 `0 <= i < j < arr.length` 的 `i` 和 `j` ，可以得到分数 `arr[i] / arr[j]`。

那么第 `k` 个最小的分数是多少呢? 以长度为 `2` 的整数数组返回你的答案, 这里 `answer[0] == arr[i]` 且 `answer[1] == arr[j]`。

---

示例 1：

```txt
输入：arr = [1,2,3,5], k = 3
输出：[2,5]
解释：已构造好的分数,排序后如下所示:
1/5, 1/3, 2/5, 1/2, 3/5, 2/3
很明显第三个最小的分数是 2/5
```

示例 2：

```txt
输入：arr = [1,7], k = 1
输出：[1,7]
```

---

提示：

- `2 <= arr.length <= 1000`
- `1 <= arr[i] <= 3 * 10^4`
- `arr[0] == 1`
- `arr[i]` 是一个 质数 ，`i > 0`
- `arr` 中的所有数字 互不相同 ，且按 严格递增 排序
- `1 <= k <= arr.length * (arr.length - 1) / 2`

进阶：你可以设计并实现时间复杂度小于 `O(n^2)` 的算法解决此问题吗？

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
