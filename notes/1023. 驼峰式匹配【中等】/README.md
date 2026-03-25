# [1023. 驼峰式匹配【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1023.%20%E9%A9%BC%E5%B3%B0%E5%BC%8F%E5%8C%B9%E9%85%8D%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/camelcase-matching/)

给你一个字符串数组 `queries`，和一个表示模式的字符串 `pattern`，请你返回一个布尔数组 `answer`。只有在待查项 `queries[i]` 与模式串 `pattern` 匹配时， `answer[i]` 才为 `true`，否则为 `false`。

如果可以将 小写字母 插入模式串 `pattern` 得到待查询项 `queries[i]`，那么待查询项与给定模式串匹配。您可以在模式串中的任何位置插入字符，也可以选择不插入任何字符。

---

示例 1：

```txt
输入：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
输出：[true,false,true,true,false]
示例：
"FooBar" 可以这样生成："F" + "oo" + "B" + "ar"。
"FootBall" 可以这样生成："F" + "oot" + "B" + "all".
"FrameBuffer" 可以这样生成："F" + "rame" + "B" + "uffer".
```

示例 2：

```txt
输入：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBa"
输出：[true,false,true,false,false]
解释：
"FooBar" 可以这样生成："Fo" + "o" + "Ba" + "r".
"FootBall" 可以这样生成："Fo" + "ot" + "Ba" + "ll".
```

示例 3：

```txt
输入：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBaT"
输出：[false,true,false,false,false]
解释：
"FooBarTest" 可以这样生成："Fo" + "o" + "Ba" + "r" + "T" + "est".
```

---

提示：

- `1 <= pattern.length, queries.length <= 100`
- `1 <= queries[i].length <= 100`
- `queries[i]` 和 `pattern` 由英文字母组成

## 2. 🎯 s.1 - 双指针匹配

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \cdot m)$，其中 $n$ 是 queries 的长度，$m$ 是单个 query 的平均长度
- 空间复杂度：$O(1)$，不计算输出空间

算法思路：

- 对每个 query，用指针 `j` 遍历 pattern
- 遍历 query 中的每个字符：如果与 pattern[j] 匹配则 `j++`，否则如果是大写字母则匹配失败
- 最终检查 `j` 是否达到 pattern 末尾
