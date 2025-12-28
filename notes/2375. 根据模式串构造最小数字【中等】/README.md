# [2375. 根据模式串构造最小数字【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2375.%20%E6%A0%B9%E6%8D%AE%E6%A8%A1%E5%BC%8F%E4%B8%B2%E6%9E%84%E9%80%A0%E6%9C%80%E5%B0%8F%E6%95%B0%E5%AD%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/construct-smallest-number-from-di-string/)

给你下标从 0 开始、长度为 `n` 的字符串 `pattern` ，它包含两种字符，`'I'` 表示 上升 ，`'D'` 表示 下降。

你需要构造一个下标从 0 开始长度为 `n + 1` 的字符串，且它要满足以下条件：

- `num` 包含数字 `'1'` 到 `'9'` ，其中每个数字 至多 使用一次。
- 如果 `pattern[i] == 'I'` ，那么 `num[i] < num[i + 1]`。
- 如果 `pattern[i] == 'D'` ，那么 `num[i] > num[i + 1]`。

请你返回满足上述条件字典序 最小 的字符串 `num`。

---

- 示例 1：

```txt
输入：pattern = "IIIDIDDD"
输出："123549876"
解释：
下标 0 ，1 ，2 和 4 处，我们需要使 num[i] < num[i+1]。
下标 3 ，5 ，6 和 7 处，我们需要使 num[i] > num[i+1]。
一些可能的 num 的值为 "245639871" ，"135749862" 和 "123849765"。
"123549876" 是满足条件最小的数字。
注意，"123414321" 不是可行解因为数字 '1' 使用次数超过 1 次。
```

- 示例 2：

```txt
输入：pattern = "DDD"
输出："4321"
解释：
一些可能的 num 的值为 "9876" ，"7321" 和 "8742"。
"4321" 是满足条件最小的数字。
```

---

提示：

- `1 <= pattern.length <= 8`
- `pattern` 只包含字符 `'I'` 和 `'D'`。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
