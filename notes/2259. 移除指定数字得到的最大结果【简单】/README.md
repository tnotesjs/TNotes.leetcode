# [2259. 移除指定数字得到的最大结果【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2259.%20%E7%A7%BB%E9%99%A4%E6%8C%87%E5%AE%9A%E6%95%B0%E5%AD%97%E5%BE%97%E5%88%B0%E7%9A%84%E6%9C%80%E5%A4%A7%E7%BB%93%E6%9E%9C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/remove-digit-from-number-to-maximize-result/)

给你一个表示某个正整数的字符串 `number` 和一个字符 `digit` 。

从 `number` 中 恰好 移除 一个 等于 `digit` 的字符后，找出并返回按 十进制 表示 最大 的结果字符串。生成的测试用例满足 `digit` 在 `number` 中出现至少一次。

---

- 示例 1：

```txt
输入：number = "123", digit = '3'
输出："12"
解释："123" 中只有一个 '3' ，在移除 '3' 之后，结果为 "12" 。
```

- 示例 2：

```txt
输入：number = "1231", digit = '1'
输出："231"
解释：可以移除第一个 '1' 得到 "231" 或者移除第二个 '1' 得到 "123" 。
由于 231 > 123 ，返回 "231" 。
```

- 示例 3：

```txt
输入：number = "551", digit = '5'
输出："51"
解释：可以从 "551" 中移除第一个或者第二个 '5' 。
两种方案的结果都是 "51" 。
```

---

提示：

- `2 <= number.length <= 100`
- `number` 由数字 `'1'` 到 `'9'` 组成
- `digit` 是 `'1'` 到 `'9'` 中的一个数字
- `digit` 在 `number` 中出现至少一次

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
