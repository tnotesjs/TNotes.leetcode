# [2525. 根据规则将箱子分类【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2525.%20%E6%A0%B9%E6%8D%AE%E8%A7%84%E5%88%99%E5%B0%86%E7%AE%B1%E5%AD%90%E5%88%86%E7%B1%BB%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/categorize-box-according-to-criteria/)

给你四个整数 `length` ，`width` ，`height` 和 `mass` ，分别表示一个箱子的三个维度和质量，请你返回一个表示箱子 类别 的字符串。

- 如果满足以下条件，那么箱子是 `"Bulky"` 的：
  - 箱子 至少有一个 维度大于等于 `10^4` 。
  - 或者箱子的 体积 大于等于 `10^9` 。
- 如果箱子的质量大于等于 `100` ，那么箱子是 `"Heavy"` 的。
- 如果箱子同时是 `"Bulky"` 和 `"Heavy"` ，那么返回类别为 `"Both"` 。
- 如果箱子既不是 `"Bulky"` ，也不是 `"Heavy"` ，那么返回类别为 `"Neither"` 。
- 如果箱子是 `"Bulky"` 但不是 `"Heavy"` ，那么返回类别为 `"Bulky"` 。
- 如果箱子是 `"Heavy"` 但不是 `"Bulky"` ，那么返回类别为 `"Heavy"` 。

注意，箱子的体积等于箱子的长度、宽度和高度的乘积。

---

- 示例 1：

```txt
输入：length = 1000, width = 35, height = 700, mass = 300
输出："Heavy"
解释：
箱子没有任何维度大于等于 104 。
体积为 24500000 <= 109 。所以不能归类为 "Bulky" 。
但是质量 >= 100 ，所以箱子是 "Heavy" 的。
由于箱子不是 "Bulky" 但是是 "Heavy" ，所以我们返回 "Heavy" 。
```

- 示例 2：

```txt
输入：length = 200, width = 50, height = 800, mass = 50
输出："Neither"
解释：
箱子没有任何维度大于等于 104 。
体积为 8 * 106 <= 109 。所以不能归类为 "Bulky" 。
质量小于 100 ，所以不能归类为 "Heavy" 。
由于不属于上述两者任何一类，所以我们返回 "Neither" 。
```

---

提示：

- `1 <= length, width, height <= 10^5`
- `1 <= mass <= 10^3`

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
