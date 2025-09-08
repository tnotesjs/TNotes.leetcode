# [0941. 有效的山脉数组【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0941.%20%E6%9C%89%E6%95%88%E7%9A%84%E5%B1%B1%E8%84%89%E6%95%B0%E7%BB%84%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/valid-mountain-array/)

给定一个整数数组 `arr`，如果它是有效的山脉数组就返回 `true`，否则返回 `false`。

让我们回顾一下，如果 `arr` 满足下述条件，那么它是一个山脉数组：

- `arr.length >= 3`
- 在 `0 < i < arr.length - 1` 条件下，存在 `i` 使得：
  - `arr[0] < arr[1] < ... arr[i-1] < arr[i]`
  - `arr[i] > arr[i+1] > ... > arr[arr.length - 1]`

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-08-20-45-10.png)

---

- **示例 1：**

```txt
输入：arr = [2,1]
输出：false
```

- **示例 2：**

```txt
输入：arr = [3,5,5]
输出：false
```

- **示例 3：**

```txt
输入：arr = [0,3,2,1]
输出：true
```

---

**提示：**

- `1 <= arr.length <= 10^4`
- `0 <= arr[i] <= 10^4`

:::

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，最多遍历数组 1 次
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间
