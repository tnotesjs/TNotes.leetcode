# [1106. 解析布尔表达式【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1106.%20%E8%A7%A3%E6%9E%90%E5%B8%83%E5%B0%94%E8%A1%A8%E8%BE%BE%E5%BC%8F%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)
- [5. 🔗 引用](#5--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/parsing-a-boolean-expression/)

**布尔表达式** 是计算结果不是 `true` 就是 `false` 的表达式。有效的表达式需遵循以下约定：

- `'t'`，运算结果为 `true`
- `'f'`，运算结果为 `false`
- `'!(subExpr)'`，运算过程为对内部表达式 `subExpr` 进行 **逻辑非**（NOT）运算
- `'&(subExpr1, subExpr2, ..., subExprn)'`，运算过程为对 2 个或以上内部表达式 `subExpr1, subExpr2, ..., subExprn` 进行 **逻辑与**（AND）运算
- `'|(subExpr1, subExpr2, ..., subExprn)'`，运算过程为对 2 个或以上内部表达式 `subExpr1, subExpr2, ..., subExprn` 进行 **逻辑或**（OR）运算

给你一个以字符串形式表述的 [布尔表达式][1] `expression`，返回该式的运算结果。

题目测试用例所给出的表达式均为有效的布尔表达式，遵循上述约定。

---

- **示例 1：**

```txt
输入：expression = "&(|(f))"
输出：false
解释：
首先，计算 |(f) --> f ，表达式变为 "&(f)" 。
接着，计算 &(f) --> f ，表达式变为 "f" 。
最后，返回 false 。
```

- **示例 2：**

```txt
输入：expression = "|(f,f,f,t)"
输出：true
解释：计算 (false OR false OR false OR true) ，结果为 true 。
```

- **示例 3：**

```txt
输入：expression = "!(&(f,t))"
输出：true
解释：
首先，计算 &(f,t) --> (false AND true) --> false --> f ，表达式变为 "!(f)" 。
接着，计算 !(f) --> NOT false --> true ，返回 true 。
```

---

**提示：**

- `1 <= expression.length <= 2 * 10^4`
- `expression[i]` 为 `'('`、`')'`、`'&'`、`'|'`、`'!'`、`'t'`、`'f'` 和 `','` 之一

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

- [布尔表达式][1]
  - 百度百科

[1]: https://baike.baidu.com/item/%E5%B8%83%E5%B0%94%E8%A1%A8%E8%BE%BE%E5%BC%8F/1574380?fr=aladdin
