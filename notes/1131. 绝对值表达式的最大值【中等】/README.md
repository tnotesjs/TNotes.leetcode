# [1131. 绝对值表达式的最大值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1131.%20%E7%BB%9D%E5%AF%B9%E5%80%BC%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-of-absolute-value-expression/)

给你两个长度相等的整数数组，返回下面表达式的最大值：

`|arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|`

其中下标 `i`，`j` 满足 `0 <= i, j < arr1.length`。

---

- **示例 1：**

```txt
输入：arr1 = [1,2,3,4], arr2 = [-1,4,5,6]
输出：13
```

- **示例 2：**

```txt
输入：arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]
输出：20
```

---

**提示：**

- `2 <= arr1.length == arr2.length <= 40000`
- `-10^6 <= arr1[i], arr2[i] <= 10^6`

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
