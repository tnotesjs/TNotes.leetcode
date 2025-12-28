# [3039. 进行操作使字符串为空【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3039.%20%E8%BF%9B%E8%A1%8C%E6%93%8D%E4%BD%9C%E4%BD%BF%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%BA%E7%A9%BA%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/apply-operations-to-make-string-empty/)

给你一个字符串 `s`。

请你进行以下操作直到 `s` 为 空 ：

- 每次操作 依次 遍历 `'a'` 到 `'z'`，如果当前字符出现在 `s` 中，那么删除出现位置 最早 的该字符（如果存在的话）。

例如，最初 `s = "aabcbbca"`。我们执行下述操作：

- 移除下划线的字符 `s = "aabcbbca"`。结果字符串为 `s = "abbca"`。
- 移除下划线的字符 `s = "abbca"`。结果字符串为 `s = "ba"`。
- 移除下划线的字符 `s = "ba"`。结果字符串为 `s = ""`。

请你返回进行 最后 一次操作 之前 的字符串 `s`。在上面的例子中，答案是 `"ba"`。

---

示例 1：

```txt
输入：s = "aabcbbca"
输出："ba"
解释：已经在题目描述中解释。
```

示例 2：

```txt
输入：s = "abcd"
输出："abcd"
解释：我们进行以下操作：
- 删除 s = "abcd" 中加粗加斜字符，得到字符串 s = ""。
进行最后一次操作之前的字符串为 "abcd"。
```

---

提示：

- `1 <= s.length <= 5 * 10^5`
- `s` 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
