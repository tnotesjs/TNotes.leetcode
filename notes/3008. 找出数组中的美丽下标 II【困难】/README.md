# [3008. 找出数组中的美丽下标 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3008.%20%E6%89%BE%E5%87%BA%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E7%BE%8E%E4%B8%BD%E4%B8%8B%E6%A0%87%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-beautiful-indices-in-the-given-array-ii/)

给你一个下标从 0 开始的字符串 `s` 、字符串 `a` 、字符串 `b` 和一个整数 `k`。

如果下标 `i` 满足以下条件，则认为它是一个 美丽下标 ：

- `0 <= i <= s.length - a.length`
- `s[i..(i + a.length - 1)] == a`
- 存在下标 `j` 使得：
  - `0 <= j <= s.length - b.length`
  - `s[j..(j + b.length - 1)] == b`
  - `|j - i| <= k`

以数组形式按 从小到大排序 返回美丽下标。

---

示例 1：

```txt
输入：s = "isawsquirrelnearmysquirrelhouseohmy", a = "my", b = "squirrel", k = 15
输出：[16,33]

解释：
存在 2 个美丽下标：[16,33]。
- 下标 16 是美丽下标，因为 s[16..17] == "my"，且存在下标 4，满足 s[4..11] == "squirrel" 且 |16 - 4| <= 15。
- 下标 33 是美丽下标，因为 s[33..34] == "my"，且存在下标 18，满足 s[18..25] == "squirrel" 且 |33 - 18| <= 15。
因此返回 [16,33] 作为结果。
```

示例 2：

```txt
输入：s = "abcd", a = "a", b = "a", k = 4
输出：[0]

解释：
存在 1 个美丽下标：[0]。
- 下标 0 是美丽下标，因为 s[0..0] == "a"，且存在下标 0，满足 s[0..0] == "a" 且 |0 - 0| <= 4。
因此返回 [0] 作为结果。
```

---

提示：

- `1 <= k <= s.length <= 5 * 10^5`
- `1 <= a.length, b.length <= 5 * 10^5`
- `s`、`a`、和 `b` 只包含小写英文字母。

## 2. 🎯 s.1 - KMP + 二分查找

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + m_a + m_b + |A| \cdot \log |B|)$，其中 n 是 s 的长度，$m_a$、$m_b$ 是 a、b 的长度，$|A|$、$|B|$ 是匹配位置数
- 空间复杂度：$O(n + m_a + m_b)$，KMP 失配数组和匹配位置数组

算法思路：

- 与 3006 题相同的思路，但由于 a、b 的长度可达 $5 \times 10^5$，需要使用 KMP 算法进行高效的字符串匹配
- 用 KMP 分别找出 a 和 b 在 s 中的所有匹配位置 posA、posB
- 对于 posA 中的每个位置 i，在 posB 中二分查找第一个 $\geq i - k$ 的位置，检查其是否 $\leq i + k$
- 若满足条件，则 i 是美丽下标
