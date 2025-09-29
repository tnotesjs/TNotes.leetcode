# [3527. 找到最常见的回答【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3527.%20%E6%89%BE%E5%88%B0%E6%9C%80%E5%B8%B8%E8%A7%81%E7%9A%84%E5%9B%9E%E7%AD%94%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-most-common-response/)

给你一个二维字符串数组 `responses`，其中每个 `responses[i]` 是一个字符串数组，表示第 `i` 天调查的回答结果。

请返回在对每个 `responses[i]` 中的回答 **去重** 后，所有天数中 **最常见** 的回答。如果有多个回答出现频率相同，则返回 **字典序最小** 的那个回答。

> - 字典序最小
>   - 字典序更小
>   - 在字符串 a 和字符串 b 出现第一个不同的位置，如果字符串 a 有一个字母比字符串 b 中的对应字母在字母表中更早出现，则字符串 a 在字典序上小于字符串 b 。
>   - 如果前 min(a.length, b.length) 个字符没有不同，则较短的字符串在字段序上较小。

---

- **示例 1：**

**输入：** responses = [["good","ok","good","ok"],["ok","bad","good","ok","ok"],["good"],["bad"]]

**输出：** "good"

**解释：**

- 每个列表去重后，得到 `responses = [["good", "ok"], ["ok", "bad", "good"], ["good"], ["bad"]]`。
- `"good"` 出现了 3 次，`"ok"` 出现了 2 次，`"bad"` 也出现了 2 次。
- 返回 `"good"`，因为它出现的频率最高。

---

- **示例 2：**

**输入：** responses = [["good","ok","good"],["ok","bad"],["bad","notsure"],["great","good"]]

**输出：** "bad"

**解释：**

- 每个列表去重后，`responses = [["good", "ok"], ["ok", "bad"], ["bad", "notsure"], ["great", "good"]]`。
- `"bad"`、`"good"` 和 `"ok"` 都出现了 2 次。
- 返回 `"bad"`，因为它在这些最高频率的词中字典序最小。

---

**提示：**

- `1 <= responses.length <= 1000`
- `1 <= responses[i].length <= 1000`
- `1 <= responses[i][j].length <= 10`
- `responses[i][j]` 仅由小写英文字母组成

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
