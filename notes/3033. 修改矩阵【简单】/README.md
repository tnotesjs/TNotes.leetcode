# [3033. 修改矩阵【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3033.%20%E4%BF%AE%E6%94%B9%E7%9F%A9%E9%98%B5%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 遍历](#2--s1---遍历)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/modify-the-matrix/)

给你一个下标从 0 开始、大小为 `m x n` 的整数矩阵 `matrix` ，新建一个下标从 0 开始、名为 `answer` 的矩阵。使 `answer` 与 `matrix` 相等，接着将其中每个值为 `-1` 的元素替换为所在列的 最大 元素。

返回矩阵 `answer`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-46-50.png)

```txt
输入：matrix = [[1,2,-1],[4,-1,6],[7,8,9]]
输出：[[1,2,9],[4,8,6],[7,8,9]]
解释：上图显示了发生替换的元素（蓝色区域）。
- 将单元格 [1][1] 中的值替换为列 1 中的最大值 8。
- 将单元格 [0][2] 中的值替换为列 2 中的最大值 9。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-46-55.png)

```txt
输入：matrix = [[3,-1],[5,2]]
输出：[[3,2],[5,2]]
解释：上图显示了发生替换的元素（蓝色区域）。
```

---

提示：

- `m == matrix.length`
- `n == matrix[i].length`
- `2 <= m, n <= 50`
- `-1 <= matrix[i][j] <= 100`
- 测试用例中生成的输入满足每列至少包含一个非负整数。

## 2. 🎯 s.1 - 遍历

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(m \times n)$，其中 m 和 n 分别是矩阵的行数和列数
- 空间复杂度：$O(n)$，用于存储每列的最大值

解题思路：

- 第一次遍历：计算每列的最大值，存储在数组中
- 第二次遍历：找到所有值为 -1 的元素，将其替换为对应列的最大值
- 直接修改原矩阵并返回
