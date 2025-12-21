# [2232. 向表达式添加括号后的最小结果【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2232.%20%E5%90%91%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%B7%BB%E5%8A%A0%E6%8B%AC%E5%8F%B7%E5%90%8E%E7%9A%84%E6%9C%80%E5%B0%8F%E7%BB%93%E6%9E%9C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimize-result-by-adding-parentheses-to-expression/)

给你一个下标从 0 开始的字符串 `expression` ，格式为 `"<num1>+<num2>"` ，其中 `<num1>` 和 `<num2>` 表示正整数。

请你向 `expression` 中添加一对括号，使得在添加之后， `expression` 仍然是一个有效的数学表达式，并且计算后可以得到 最小 可能值。左括号 必须 添加在 `'+'` 的左侧，而右括号必须添加在 `'+'` 的右侧。

返回添加一对括号后形成的表达式 `expression` ，且满足 `expression` 计算得到 最小 可能值*。*如果存在多个答案都能产生相同结果，返回任意一个答案。

生成的输入满足：`expression` 的原始值和添加满足要求的任一对括号之后 `expression` 的值，都符合 32-bit 带符号整数范围。

---

- 示例 1：

```txt
输入：expression = "247+38"
输出："2(47+38)"
解释：表达式计算得到 2 * (47 + 38) = 2 * 85 = 170 。
注意 "2(4)7+38" 不是有效的结果，因为右括号必须添加在 '+' 的右侧。
可以证明 170 是最小可能值。
```

- 示例 2：

```txt
输入：expression = "12+34"
输出："1(2+3)4"
解释：表达式计算得到 1 * (2 + 3) * 4 = 1 * 5 * 4 = 20 。
```

- 示例 3：

```txt
输入：expression = "999+999"
输出："(999+999)"
解释：表达式计算得到 999 + 999 = 1998 。
```

---

提示：

- `3 <= expression.length <= 10`
- `expression` 仅由数字 `'1'` 到 `'9'` 和 `'+'` 组成
- `expression` 由数字开始和结束
- `expression` 恰好仅含有一个 `'+'`.
- `expression` 的原始值和添加满足要求的任一对括号之后 `expression` 的值，都符合 32-bit 带符号整数范围

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
