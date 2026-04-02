# [1395. 统计作战单位数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1395.%20%E7%BB%9F%E8%AE%A1%E4%BD%9C%E6%88%98%E5%8D%95%E4%BD%8D%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 枚举中间元素](#2--s1---枚举中间元素)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-number-of-teams/)

`n` 名士兵站成一排。每个士兵都有一个 独一无二 的评分 `rating`。

从中选出 3 个士兵组成一个作战单位，规则如下：

- 从队伍中选出下标分别为 `i`、`j`、`k` 的 3 名士兵，他们的评分分别为 `rating[i]`、`rating[j]`、`rating[k]`
- 作战单位需满足：`rating[i] < rating[j] < rating[k]` 或者 `rating[i] > rating[j] > rating[k]`，其中 `0 <= i < j < k < n`

请你返回按上述条件组建的作战单位的方案数。

---

示例 1：

```txt
输入：rating = [2,5,3,4,1]
输出：3
解释：我们可以组建三个作战单位 (2,3,4)、(5,4,1)、(5,3,1)。
```

示例 2：

```txt
输入：rating = [2,1,3]
输出：0
解释：根据题目条件，我们无法组建作战单位。
```

示例 3：

```txt
输入：rating = [1,2,3,4]
输出：4
```

---

提示：

- `n == rating.length`
- `3 <= n <= 1000`
- `1 <= rating[i] <= 10^5`
- `rating` 中的元素都是唯一的

## 2. 🎯 s.1 - 枚举中间元素

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，其中 $n$ 是数组长度
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

算法思路：

- 枚举中间位置 j，统计左侧比 rating[j] 小/大的个数，右侧比 rating[j] 大/小的个数
- 递增三元组数 = leftLess × rightGreater
- 递减三元组数 = leftGreater × rightLess
- 两者之和即为以 j 为中间的方案数
