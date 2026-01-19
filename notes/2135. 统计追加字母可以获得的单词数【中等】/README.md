# [2135. 统计追加字母可以获得的单词数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2135.%20%E7%BB%9F%E8%AE%A1%E8%BF%BD%E5%8A%A0%E5%AD%97%E6%AF%8D%E5%8F%AF%E4%BB%A5%E8%8E%B7%E5%BE%97%E7%9A%84%E5%8D%95%E8%AF%8D%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-words-obtained-after-adding-a-letter/)

给你两个下标从 0 开始的字符串数组 `startWords` 和 `targetWords`。每个字符串都仅由 小写英文字母 组成。

对于 `targetWords` 中的每个字符串，检查是否能够从 `startWords` 中选出一个字符串，执行一次 转换操作，得到的结果与当前 `targetWords` 字符串相等。

转换操作 如下面两步所述：

1. 追加 任何 不存在 于当前字符串的任一小写字母到当前字符串的末尾。
   - 例如，如果字符串为 `"abc"`，那么字母 `'d'`、`'e'` 或 `'y'` 都可以加到该字符串末尾，但 `'a'` 就不行。如果追加的是 `'d'`，那么结果字符串为 `"abcd"`。
2. 重排 新字符串中的字母，可以按 任意 顺序重新排布字母。
   - 例如，`"abcd"` 可以重排为 `"acbd"`、`"bacd"`、`"cbda"`，以此类推。注意，它也可以重排为 `"abcd"` 自身。

找出 `targetWords` 中有多少字符串能够由 `startWords` 中的 任一 字符串执行上述转换操作获得。返回 `targetWords` 中这类 字符串的数目。

---

注意：你仅能验证 `targetWords` 中的字符串是否可以由 `startWords` 中的某个字符串经执行操作获得。`startWords` 中的字符串在这一过程中 不 发生实际变更。

---

示例 1：

```txt
输入：startWords = ["ant","act","tack"], targetWords = ["tack","act","acti"]
输出：2
解释：
- 为了形成 targetWords[0] = "tack"，可以选用 startWords[1] = "act"，追加字母 'k'，并重排 "actk" 为 "tack"。
- startWords 中不存在可以用于获得 targetWords[1] = "act" 的字符串。
  注意 "act" 确实存在于 startWords，但是 必须 在重排前给这个字符串追加一个字母。
- 为了形成 targetWords[2] = "acti"，可以选用 startWords[1] = "act"，追加字母 'i'，并重排 "acti" 为 "acti" 自身。
```

示例 2：

```txt
输入：startWords = ["ab","a"], targetWords = ["abc","abcd"]
输出：1
解释：
- 为了形成 targetWords[0] = "abc"，可以选用 startWords[0] = "ab"，追加字母 'c'，并重排为 "abc"。
- startWords 中不存在可以用于获得 targetWords[1] = "abcd" 的字符串。
```

---

提示：

- `1 <= startWords.length, targetWords.length <= 5 * 10^4`
- `1 <= startWords[i].length, targetWords[j].length <= 26`
- `startWords` 和 `targetWords` 中的每个字符串都仅由小写英文字母组成
- 在 `startWords` 或 `targetWords` 的任一字符串中，每个字母至多出现一次

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
