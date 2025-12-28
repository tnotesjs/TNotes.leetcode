# [0263. 丑数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0263.%20%E4%B8%91%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 迭代法](#2--s1---迭代法)
- [3. 🎯 s.2 - 递归法](#3--s2---递归法)
- [4. 🔗 引用](#4--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/ugly-number/)

丑数 就是只包含质因数 `2`、`3` 和 `5` 的 _正_ 整数。

给你一个整数 `n` ，请你判断 `n` 是否为 丑数。如果是，返回 `true` ；否则，返回 `false`。

---

示例 1：

```txt
输入：n = 6
输出：true
解释：6 = 2 × 3
```

示例 2：

```txt
输入：n = 1
输出：true
解释：1 没有质因数。
```

示例 3：

```txt
输入：n = 14
输出：false
解释：14 不是丑数，因为它包含了另外一个质因数 7。
```

---

提示：

- `-2^31 <= n <= 2^31 - 1`

::: tip 题目解读

- 丑数是指只包含质因数 2、3 和 5 的正整数。换句话说，丑数可以写成 2^a × 3^b × 5^c 的形式，其中 a、b、c 都是非负整数。
- 判断一个数是否为丑数的方法是：
  1. 如果数字小于等于 0，则不是丑数
  2. 不断地将数字除以 2、3、5，直到不能整除为止
  3. 如果最终结果是 1，则原数是丑数；否则不是

:::

## 2. 🎯 s.1 - 迭代法

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/2.js [js(更简洁)]

:::

- 时间复杂度：$O(\log n)$，最坏情况下需要除法操作 $\log n$ 次
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 递归法

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(\log n)$
- 空间复杂度：$O(\log n)$，递归调用栈

## 4. 🔗 引用

- [丑数][3]
  - 百度百科
- [质因数][2]
  - 百度百科
- [算术基本定理（Fundamental Theorem of Arithmetic）][1]
  - 百度百科
  - 任何一个大于 1 的整数，都可以唯一地分解成质因数的乘积。

[1]: https://baike.baidu.com/item/%E7%AE%97%E6%9C%AF%E5%9F%BA%E6%9C%AC%E5%AE%9A%E7%90%86/10920095
[2]: https://baike.baidu.com/item/%E8%B4%A8%E5%9B%A0%E6%95%B0
[3]: https://baike.baidu.com/item/%E4%B8%91%E6%95%B0
