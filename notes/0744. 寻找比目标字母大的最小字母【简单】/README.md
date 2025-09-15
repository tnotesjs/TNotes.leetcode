# [0744. 寻找比目标字母大的最小字母【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0744.%20%E5%AF%BB%E6%89%BE%E6%AF%94%E7%9B%AE%E6%A0%87%E5%AD%97%E6%AF%8D%E5%A4%A7%E7%9A%84%E6%9C%80%E5%B0%8F%E5%AD%97%E6%AF%8D%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-smallest-letter-greater-than-target/)

给你一个字符数组 `letters`，该数组按**非递减顺序**排序，以及一个字符 `target`。`letters`  里**至少有两个不同**的字符。

返回  `letters`  中大于 `target` 的最小的字符。如果不存在这样的字符，则返回  `letters` 的第一个字符。

---

- **示例 1：**

```txt
输入: letters = ['c', 'f', 'j']，target = 'a'
输出: 'c'
解释：letters 中字典上比 'a' 大的最小字符是 'c'。
```

- **示例 2:**

```txt
输入: letters = ['c','f','j'], target = 'c'
输出: 'f'
解释：letters 中字典顺序上大于 'c' 的最小字符是 'f'。
```

- **示例 3:**

```txt
输入: letters = ['x','x','y','y'], target = 'z'
输出: 'x'
解释：letters 中没有一个字符在字典上大于 'z'，所以我们返回 letters[0]。
```

---

**提示：**

- `2 <= letters.length <= 10^4`
- `letters[i]`  是一个小写字母
- `letters` 按**非递减顺序**排序
- `letters` 最少包含两个不同的字母
- `target` 是一个小写字母

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
