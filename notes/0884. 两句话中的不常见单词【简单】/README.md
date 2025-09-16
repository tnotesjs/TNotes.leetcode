# [0884. 两句话中的不常见单词【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0884.%20%E4%B8%A4%E5%8F%A5%E8%AF%9D%E4%B8%AD%E7%9A%84%E4%B8%8D%E5%B8%B8%E8%A7%81%E5%8D%95%E8%AF%8D%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/uncommon-words-from-two-sentences/)

**句子** 是一串由空格分隔的单词。每个 **单词** 仅由小写字母组成。

如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 **没有出现** ，那么这个单词就是 **不常见的** 。

给你两个 **句子** `s1` 和 `s2` ，返回所有 **不常用单词** 的列表。返回列表中单词可以按 **任意顺序** 组织。

---

- **示例 1：**

```txt
输入：s1 = "this apple is sweet", s2 = "this apple is sour"
输出：["sweet","sour"]
```

- **示例 2：**

```txt
输入：s1 = "apple apple", s2 = "banana"
输出：["banana"]
```

---

**提示：**

- `1 <= s1.length, s2.length <= 200`
- `s1` 和 `s2` 由小写英文字母和空格组成
- `s1` 和 `s2` 都不含前导或尾随空格
- `s1` 和 `s2` 中的所有单词间均由单个空格分隔

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
