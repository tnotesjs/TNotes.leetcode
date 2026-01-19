# [0906. 超级回文数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0906.%20%E8%B6%85%E7%BA%A7%E5%9B%9E%E6%96%87%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/super-palindromes/)

如果一个正整数自身是回文数，而且它也是一个回文数的平方，那么我们称这个数为 超级回文数。

现在，给你两个以字符串形式表示的正整数 left 和 right，统计并返回区间 `[left, right]` 中的 超级回文数 的数目。

---

示例 1：

```txt
输入：left = "4", right = "1000"
输出：4
解释：4、9、121 和 484 都是超级回文数。
注意 676 不是超级回文数：26 * 26 = 676，但是 26 不是回文数。
```

示例 2：

```txt
输入：left = "1", right = "2"
输出：1
```

---

提示：

- `1 <= left.length, right.length <= 18`
- `left` 和 `right` 仅由数字（0 - 9）组成。
- `left` 和 `right` 不含前导零。
- `left` 和 `right` 表示的整数在区间 `[1, 10^18 - 1]` 内。
- `left` 小于等于 `right`。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
