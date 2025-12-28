# [1550. 存在连续三个奇数的数组【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1550.%20%E5%AD%98%E5%9C%A8%E8%BF%9E%E7%BB%AD%E4%B8%89%E4%B8%AA%E5%A5%87%E6%95%B0%E7%9A%84%E6%95%B0%E7%BB%84%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/three-consecutive-odds/)

给你一个整数数组 `arr`，请你判断数组中是否存在连续三个元素都是奇数的情况：如果存在，请返回 `true` ；否则，返回 `false`。

---

- 示例 1：

```txt
输入：arr = [2,6,4,1]
输出：false
解释：不存在连续三个元素都是奇数的情况。
```

- 示例 2：

```txt
输入：arr = [1,2,34,3,4,5,7,23,12]
输出：true
解释：存在连续三个元素都是奇数的情况，即 [5,7,23]。
```

---

提示：

- `1 <= arr.length <= 1000`
- `1 <= arr[i] <= 1000`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
