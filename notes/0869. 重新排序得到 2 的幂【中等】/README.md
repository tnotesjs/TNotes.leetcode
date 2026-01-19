# [0869. 重新排序得到 2 的幂【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0869.%20%E9%87%8D%E6%96%B0%E6%8E%92%E5%BA%8F%E5%BE%97%E5%88%B0%202%20%E7%9A%84%E5%B9%82%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reordered-power-of-2/)

给定正整数 `n`，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。

如果我们可以通过上述方式得到 2 的幂，返回 `true`；否则，返回 `false`。

---

示例 1：

```txt
输入：n = 1
输出：true
```

示例 2：

```txt
输入：n = 10
输出：false
```

---

提示：

- `1 <= n <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
