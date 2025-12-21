# [3304. 找出第 K 个字符 I【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3304.%20%E6%89%BE%E5%87%BA%E7%AC%AC%20K%20%E4%B8%AA%E5%AD%97%E7%AC%A6%20I%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 位运算](#2--s1---位运算)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-k-th-character-in-string-game-i/)

Alice 和 Bob 正在玩一个游戏。最初，Alice 有一个字符串 `word = "a"`。

给定一个正整数 `k`。

现在 Bob 会要求 Alice 执行以下操作 无限次 :

- 将 `word` 中的每个字符 更改 为英文字母表中的 下一个 字符来生成一个新字符串，并将其 追加 到原始的 `word`。

例如，对 `"c"` 进行操作生成 `"cd"`，对 `"zb"` 进行操作生成 `"zbac"`。

在执行足够多的操作后， `word` 中 至少 存在 `k` 个字符，此时返回 `word` 中第 `k` 个字符的值。

---

- 示例 1：

输入： k = 5

输出： "b"

解释：

最初，`word = "a"`。需要进行三次操作:

- 生成的字符串是 `"b"`，`word` 变为 `"ab"`。
- 生成的字符串是 `"bc"`，`word` 变为 `"abbc"`。
- 生成的字符串是 `"bccd"`，`word` 变为 `"abbcbccd"`。

---

- 示例 2：

输入： k = 10

输出： "c"

---

提示：

- `1 <= k <= 500`

## 2. 🎯 s.1 - 位运算

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(\log k)$，计算二进制中 1 的个数
- 空间复杂度：$O(\log k)$，存储二进制字符串

解题思路：

- 每次操作将字符串长度翻倍，新增部分的每个字符是对应原字符 + 1
- 位置 k 的字符取决于从根节点（第 1 个字符）到达它的路径中"往右"的次数
- 这等价于 k-1 的二进制表示中 1 的个数
- 答案为 `'a' + popcount(k-1)`
