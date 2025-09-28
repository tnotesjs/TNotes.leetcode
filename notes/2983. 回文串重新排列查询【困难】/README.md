# [2983. 回文串重新排列查询【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2983.%20%E5%9B%9E%E6%96%87%E4%B8%B2%E9%87%8D%E6%96%B0%E6%8E%92%E5%88%97%E6%9F%A5%E8%AF%A2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/palindrome-rearrangement-queries/)

给你一个长度为 **偶数** `n` ，下标从 **0** 开始的字符串 `s` 。

同时给你一个下标从 **0** 开始的二维整数数组 `queries` ，其中 `queries[i] = [ai, bi, ci, di]` 。

对于每个查询 `i` ，你需要执行以下操作：

- 将下标在范围 `0 <= ai <= bi < n / 2` 内的 **子字符串** `s[ai:bi]` 中的字符重新排列。
- 将下标在范围 `n / 2 <= ci <= di < n` 内的 **子字符串** `s[ci:di]` 中的字符重新排列。

对于每个查询，你的任务是判断执行操作后能否让 `s` 变成一个 **回文串** 。

每个查询与其他查询都是 **独立的** 。

请你返回一个下标从 **0** 开始的数组 `answer` ，如果第 `i` 个查询执行操作后，可以将 `s` 变为一个回文串，那么 `answer[i] = true`，否则为 `false` 。

- **子字符串** 指的是一个字符串中一段连续的字符序列。
- `s[x:y]` 表示 `s` 中从下标 `x` 到 `y` 且两个端点 **都包含** 的子字符串。

---

- **示例 1：**

```txt
输入：s = "abcabc", queries = [[1,1,3,5],[0,2,5,5]]
输出：[true,true]
解释：这个例子中，有 2 个查询：
第一个查询：
- a0 = 1, b0 = 1, c0 = 3, d0 = 5
- 你可以重新排列 s[1:1] => abcabc 和 s[3:5] => abcabc 。
- 为了让 s 变为回文串，s[3:5] 可以重新排列得到 => abccba 。
- 现在 s 是一个回文串。所以 answer[0] = true 。
第二个查询：
- a1 = 0, b1 = 2, c1 = 5, d1 = 5.
- 你可以重新排列 s[0:2] => abcabc 和 s[5:5] => abcabc 。
- 为了让 s 变为回文串，s[0:2] 可以重新排列得到 => cbaabc 。
- 现在 s 是一个回文串，所以 answer[1] = true 。
```

- **示例 2：**

```txt
输入：s = "abbcdecbba", queries = [[0,2,7,9]]
输出：[false]
解释：这个示例中，只有一个查询。
a0 = 0, b0 = 2, c0 = 7, d0 = 9.
你可以重新排列 s[0:2] => abbcdecbba 和 s[7:9] => abbcdecbba 。
无法通过重新排列这些子字符串使 s 变为一个回文串，因为 s[3:6] 不是一个回文串。
所以 answer[0] = false 。
```

- **示例 3：**

```txt
输入：s = "acbcab", queries = [[1,2,4,5]]
输出：[true]
解释：这个示例中，只有一个查询。
a0 = 1, b0 = 2, c0 = 4, d0 = 5.
你可以重新排列 s[1:2] => acbcab 和 s[4:5] => acbcab 。
为了让 s 变为回文串，s[1:2] 可以重新排列得到 => abccab 。
然后 s[4:5] 重新排列得到 abccba 。
现在 s 是一个回文串，所以 answer[0] = true 。
```

---

**提示：**

- `2 <= n == s.length <= 10^5`
- `1 <= queries.length <= 10^5`
- `queries[i].length == 4`
- `ai == queries[i][0], bi == queries[i][1]`
- `ci == queries[i][2], di == queries[i][3]`
- `0 <= ai <= bi < n / 2`
- `n / 2 <= ci <= di < n`
- `n` 是一个偶数。
- `s` 只包含小写英文字母。

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
