# [1442. 形成两个异或相等数组的三元组数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1442.%20%E5%BD%A2%E6%88%90%E4%B8%A4%E4%B8%AA%E5%BC%82%E6%88%96%E7%9B%B8%E7%AD%89%E6%95%B0%E7%BB%84%E7%9A%84%E4%B8%89%E5%85%83%E7%BB%84%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 前缀异或](#2--s1---前缀异或)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/)

给你一个整数数组 `arr`。

现需要从数组中取三个下标 `i`、`j` 和 `k`，其中 `(0 <= i < j <= k < arr.length)`。

`a` 和 `b` 定义如下：

- `a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]`
- `b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]`

注意：^ 表示 按位异或 操作。

请返回能够令 `a == b` 成立的三元组 (`i`, `j` , `k`) 的数目。

---

示例 1：

```txt
输入：arr = [2,3,1,6,7]
输出：4

解释：
满足题意的三元组分别是 (0,1,2), (0,2,2), (2,3,4) 以及 (2,4,4)
```

示例 2：

```txt
输入：arr = [1,1,1,1,1]
输出：10
```

示例 3：

```txt
输入：arr = [2,3]
输出：0
```

示例 4：

```txt
输入：arr = [1,3,5,7,9]
输出：3
```

示例 5：

```txt
输入：arr = [7,11,12,9,5,2,7,17,22]
输出：8
```

---

提示：

- `1 <= arr.length <= 300`
- `1 <= arr[i] <= 10^8`

## 2. 🎯 s.1 - 前缀异或

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，其中 $n$ 是数组长度
- 空间复杂度：$O(n)$，存储前缀异或数组

算法思路：

- a == b 等价于 arr[i] 到 arr[k] 的异或为 0，即 prefix[i] == prefix[k+1]
- 枚举所有 (i, k) 对，若前缀异或相等，j 可在 i+1 到 k 之间取值，贡献 k - i 个三元组
