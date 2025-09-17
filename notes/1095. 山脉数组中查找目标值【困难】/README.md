# [1095. 山脉数组中查找目标值【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1095.%20%E5%B1%B1%E8%84%89%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9F%A5%E6%89%BE%E7%9B%AE%E6%A0%87%E5%80%BC%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-in-mountain-array/)

（这是一个 **交互式问题** ）

你可以将一个数组 `arr` 称为 **山脉数组** 当且仅当：

- `arr.length >= 3`
- 存在一些 `0 < i < arr.length - 1` 的 `i` 使得：
  - `arr[0] < arr[1] < ... < arr[i - 1] < arr[i]`
  - `arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`

给定一个山脉数组 `mountainArr` ，返回 **最小** 的 `index` 使得 `mountainArr.get(index) == target`。如果不存在这样的 `index`，返回 `-1` 。

**你无法直接访问山脉数组**。你只能使用 `MountainArray` 接口来访问数组：

- `MountainArray.get(k)` 返回数组中下标为 `k` 的元素（从 0 开始）。
- `MountainArray.length()` 返回数组的长度。

调用 `MountainArray.get` 超过 `100` 次的提交会被判定为错误答案。此外，任何试图绕过在线评测的解决方案都将导致取消资格。

---

- **示例 1：**

```txt
输入：mountainArr = [1,2,3,4,5,3,1], target = 3
输出：2
解释：3 在数组中出现了两次，下标分别为 2 和 5，我们返回最小的下标 2。
```

- **示例 2：**

```txt
输入：mountainArr = [0,1,2,4,2,1], target = 3
输出：-1
解释：3 在数组中没有出现，返回 -1。
```

---

**提示：**

- `3 <= mountainArr.length() <= 10^4`
- `0 <= target <= 10^9`
- `0 <= mountainArr.get(index) <= 10^9`

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
