# [1189. “气球” 的最大数量【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1189.%20%E2%80%9C%E6%B0%94%E7%90%83%E2%80%9D%20%E7%9A%84%E6%9C%80%E5%A4%A7%E6%95%B0%E9%87%8F%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)
- [5. 🔗 引用](#5--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-number-of-balloons/)

给你一个字符串 `text`，你需要使用 `text` 中的字母来拼凑尽可能多的单词 **"balloon"（气球）**。

字符串 `text` 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 **"balloon"**。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-18-51-06.png)

```txt
输入：text = "nlaebolko"
输出：1
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-18-51-11.png)

```txt
输入：text = "loonbalxballpoon"
输出：2
```

- **示例 3：**

```txt
输入：text = "leetcode"
输出：0
```

---

**提示：**

- `1 <= text.length <= 10^4`
- `text` 全部由小写英文字母组成

---

**注意：** 本题与 [2287. 重排字符形成目标字符串][1] 相同。

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

## 5. 🔗 引用

- [2287. 重排字符形成目标字符串][1]

[1]: https://leetcode.cn/problems/rearrange-characters-to-make-target-string/
