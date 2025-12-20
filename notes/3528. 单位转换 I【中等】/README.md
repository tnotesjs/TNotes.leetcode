# [3528. 单位转换 I【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3528.%20%E5%8D%95%E4%BD%8D%E8%BD%AC%E6%8D%A2%20I%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/unit-conversion-i/)

有 `n` 种单位，编号从 `0` 到 `n - 1`。给你一个二维整数数组 `conversions`，长度为 `n - 1`，其中 `conversions[i] = [sourceUniti, targetUniti, conversionFactori]` ，表示一个 `sourceUniti` 类型的单位等于 `conversionFactori` 个 `targetUniti` 类型的单位。

请你返回一个长度为 `n` 的数组 `baseUnitConversion`，其中 `baseUnitConversion[i]` 表示 一个 0 类型单位等于多少个 i 类型单位。由于结果可能很大，请返回每个 `baseUnitConversion[i]` 对 `10^9 + 7` 取模后的值。

---

- 示例 1：

输入： conversions = [[0,1,2],[1,2,3]]

输出： [1,2,6]

解释：

- 使用 `conversions[0]`：将一个 0 类型单位转换为 2 个 1 类型单位。
- 使用 `conversions[0]` 和 `conversions[1]` 将一个 0 类型单位转换为 6 个 2 类型单位。

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-22-57-19.png)

---

- 示例 2：

输入： conversions = [[0,1,2],[0,2,3],[1,3,4],[1,4,5],[2,5,2],[4,6,3],[5,7,4]]

输出： [1,2,3,8,10,6,30,24]

解释：

- 使用 `conversions[0]` 将一个 0 类型单位转换为 2 个 1 类型单位。
- 使用 `conversions[1]` 将一个 0 类型单位转换为 3 个 2 类型单位。
- 使用 `conversions[0]` 和 `conversions[2]` 将一个 0 类型单位转换为 8 个 3 类型单位。
- 使用 `conversions[0]` 和 `conversions[3]` 将一个 0 类型单位转换为 10 个 4 类型单位。
- 使用 `conversions[1]` 和 `conversions[4]` 将一个 0 类型单位转换为 6 个 5 类型单位。
- 使用 `conversions[0]`、`conversions[3]` 和 `conversions[5]` 将一个 0 类型单位转换为 30 个 6 类型单位。
- 使用 `conversions[1]`、`conversions[4]` 和 `conversions[6]` 将一个 0 类型单位转换为 24 个 7 类型单位。

---

提示：

- `2 <= n <= 10^5`
- `conversions.length == n - 1`
- `0 <= sourceUniti, targetUniti < n`
- `1 <= conversionFactori <= 10^9`
- 保证单位 0 可以通过 唯一 的转换路径（不需要反向转换）转换为任何其他单位。

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
