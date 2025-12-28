# [0888. 公平的糖果交换【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0888.%20%E5%85%AC%E5%B9%B3%E7%9A%84%E7%B3%96%E6%9E%9C%E4%BA%A4%E6%8D%A2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/fair-candy-swap/)

爱丽丝和鲍勃拥有不同总数量的糖果。给你两个数组 `aliceSizes` 和 `bobSizes` ，`aliceSizes[i]` 是爱丽丝拥有的第 `i` 盒糖果中的糖果数量，`bobSizes[j]` 是鲍勃拥有的第 `j` 盒糖果中的糖果数量。

两人想要互相交换一盒糖果，这样在交换之后，他们就可以拥有相同总数量的糖果。一个人拥有的糖果总数量是他们每盒糖果数量的总和。

返回一个整数数组 `answer`，其中 `answer[0]` 是爱丽丝必须交换的糖果盒中的糖果的数目，`answer[1]` 是鲍勃必须交换的糖果盒中的糖果的数目。如果存在多个答案，你可以返回其中 任何一个。题目测试用例保证存在与输入对应的答案。

---

示例 1：

```txt
输入：aliceSizes = [1,1], bobSizes = [2,2]
输出：[1,2]
```

示例 2：

```txt
输入：aliceSizes = [1,2], bobSizes = [2,3]
输出：[1,2]
```

示例 3：

```txt
输入：aliceSizes = [2], bobSizes = [1,3]
输出：[2,3]
```

示例 4：

```txt
输入：aliceSizes = [1,2,5], bobSizes = [2,4]
输出：[5,4]
```

---

提示：

- `1 <= aliceSizes.length, bobSizes.length <= 10^4`
- `1 <= aliceSizes[i], bobSizes[j] <= 10^5`
- 爱丽丝和鲍勃的糖果总数量不同。
- 题目数据保证对于给定的输入至少存在一个有效答案。

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n + m)$，其中 $n$ 和 $m$ 分别是 Alice 和 Bob 的糖果棒数量
- 空间复杂度：$O(m)$，用于存储 Bob 的糖果棒大小的 Set 集合
- 解题思路：
  1. 计算总和：首先计算 Alice 和 Bob 各自的糖果总数
  2. 数学推导：假设 Alice 交换 `a` 大小的糖果棒，Bob 交换 `b` 大小的糖果棒，交换后两人糖果总数相等，则有： `sumAlice - a + b = sumBob - b + a` 化简得：`a - b = (sumAlice - sumBob) / 2`
  3. 查找匹配：对于 Alice 的每个糖果棒 `a`，计算 Bob 需要提供的糖果棒大小 `b = a - diff`，并在 Bob 的糖果棒中查找是否存在该大小
