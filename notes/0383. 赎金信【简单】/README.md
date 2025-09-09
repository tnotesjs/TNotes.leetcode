# [0383. 赎金信【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0383.%20%E8%B5%8E%E9%87%91%E4%BF%A1%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - arr](#2--s1---arr)
- [3. 🎯 s.2 - map](#3--s2---map)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/ransom-note/)

给你两个字符串：`ransomNote` 和 `magazine` ，判断 `ransomNote` 能不能由 `magazine` 里面的字符构成。

如果可以，返回 `true` ；否则返回 `false` 。

`magazine` 中的每个字符只能在 `ransomNote` 中使用一次。

---

- **示例 1：**

```txt
输入：ransomNote = "a", magazine = "b"
输出：false
```

- **示例 2：**

```txt
输入：ransomNote = "aa", magazine = "ab"
输出：false
```

- **示例 3：**

```txt
输入：ransomNote = "aa", magazine = "aab"
输出：true
```

---

**提示：**

- `1 <= ransomNote.length, magazine.length <= 10^5`
- `ransomNote` 和 `magazine` 由小写英文字母组成

## 2. 🎯 s.1 - arr

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：O(m + n)，其中 m 是杂志字符串长度，n 是赎金信字符串长度
- 空间复杂度：O(1)，使用了固定大小的数组（26 个字母）

## 3. 🎯 s.2 - map

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：O(m + n)，其中 m 是杂志字符串长度，n 是赎金信字符串长度，需要遍历两个字符串各一次。
- 空间复杂度：O(k)，其中 k 是杂志中不同字符的个数，最坏情况下需要存储杂志中所有不同的字符及其频次。
