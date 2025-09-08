# [2418. 按身高排序【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2418.%20%E6%8C%89%E8%BA%AB%E9%AB%98%E6%8E%92%E5%BA%8F%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/sort-the-people/)

给你一个字符串数组 `names` ，和一个由 **互不相同** 的正整数组成的数组 `heights` 。两个数组的长度均为 `n` 。

对于每个下标 `i`，`names[i]` 和 `heights[i]` 表示第 `i` 个人的名字和身高。

请按身高 **降序** 顺序返回对应的名字数组 `names` 。

---

- **示例 1：**

```txt
输入：names = ["Mary","John","Emma"], heights = [180,165,170]
输出：["Mary","Emma","John"]
解释：Mary 最高，接着是 Emma 和 John 。
```

- **示例 2：**

```txt
输入：names = ["Alice","Bob","Bob"], heights = [155,185,150]
输出：["Bob","Alice","Bob"]
解释：第一个 Bob 最高，然后是 Alice 和第二个 Bob 。
```

---

**提示：**

- `n == names.length == heights.length`
- `1 <= n <= 10^3`
- `1 <= names[i].length <= 20`
- `1 <= heights[i] <= 10^5`
- `names[i]` 由大小写英文字母组成
- `heights` 中的所有值互不相同

:::

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::
