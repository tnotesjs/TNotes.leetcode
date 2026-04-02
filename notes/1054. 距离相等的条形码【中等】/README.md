# [1054. 距离相等的条形码【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1054.%20%E8%B7%9D%E7%A6%BB%E7%9B%B8%E7%AD%89%E7%9A%84%E6%9D%A1%E5%BD%A2%E7%A0%81%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 计数 + 间隔放置](#2--s1---计数--间隔放置)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/distant-barcodes/)

在一个仓库里，有一排条形码，其中第 `i` 个条形码为 `barcodes[i]`。

请你重新排列这些条形码，使其中任意两个相邻的条形码不能相等。 你可以返回任何满足该要求的答案，此题保证存在答案。

---

示例 1：

```txt
输入：barcodes = [1,1,1,2,2,2]
输出：[2,1,2,1,2,1]
```

示例 2：

```txt
输入：barcodes = [1,1,1,1,2,2,3,3]
输出：[1,3,1,3,2,1,2,1]
```

---

提示：

- `1 <= barcodes.length <= 10000`
- `1 <= barcodes[i] <= 10000`

## 2. 🎯 s.1 - 计数 + 间隔放置

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$，其中 $n$ 是数组的长度
- 空间复杂度：$O(n)$，计数和结果数组

算法思路：

- 统计每个条形码的出现次数，按频率降序排序
- 先放偶数位置，再放奇数位置，确保相邻元素不同
- 优先放置频率最高的元素，保证不会出现相邻重复
