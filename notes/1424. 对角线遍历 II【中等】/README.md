# [1424. 对角线遍历 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1424.%20%E5%AF%B9%E8%A7%92%E7%BA%BF%E9%81%8D%E5%8E%86%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/diagonal-traverse-ii/)

给你一个列表 `nums`，里面每一个元素都是一个整数列表。请你依照下面各图的规则，按顺序返回 `nums` 中对角线上的整数。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-21-23-51-25.png)

```txt
输入：nums = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,4,2,7,5,3,8,6,9]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-21-23-51-30.png)

```txt
输入：nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
输出：[1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]
```

示例 3：

```txt
输入：nums = [[1,2,3],[4],[5,6,7],[8],[9,10,11]]
输出：[1,4,2,5,3,8,6,9,7,10,11]
```

示例 4：

```txt
输入：nums = [[1,2,3,4,5,6]]
输出：[1,2,3,4,5,6]
```

---

提示：

- `1 <= nums.length <= 10^5`
- `1 <= nums[i].length <= 10^5`
- `1 <= nums[i][j] <= 10^9`
- `nums` 中最多有 `10^5` 个数字。

## 2. 🎯 s.1 - 对角线分组

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N)$，其中 $N$ 是所有元素总数
- 空间复杂度：$O(N)$，存储分组结果

算法思路：

- 同一对角线上的元素满足 i + j 相同
- 按 i + j 分组，同组内反序输出（从下到上）
