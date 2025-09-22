# [1521. 找到最接近目标值的函数值【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1521.%20%E6%89%BE%E5%88%B0%E6%9C%80%E6%8E%A5%E8%BF%91%E7%9B%AE%E6%A0%87%E5%80%BC%E7%9A%84%E5%87%BD%E6%95%B0%E5%80%BC%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-a-value-of-a-mysterious-function-closest-to-target/)

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-15-38.png)

Winston 构造了一个如上所示的函数 `func` 。他有一个整数数组 `arr` 和一个整数 `target` ，他想找到让 `|func(arr, l, r) - target|` 最小的 `l` 和 `r` 。

请你返回 `|func(arr, l, r) - target|` 的最小值。

请注意， `func` 的输入参数 `l` 和 `r` 需要满足 `0 <= l, r < arr.length` 。

---

- **示例 1：**

```txt
输入：arr = [9,12,3,7,15], target = 5
输出：2

解释：
所有可能的 [l,r] 数对包括 [[0,0],[1,1],[2,2],[3,3],[4,4],[0,1],[1,2],[2,3],[3,4],[0,2],[1,3],[2,4],[0,3],[1,4],[0,4]]， Winston 得到的相应结果为 [9,12,3,7,15,8,0,3,7,0,0,3,0,0,0] 。
最接近 5 的值是 7 和 3，所以最小差值为 2 。
```

- **示例 2：**

```txt
输入：arr = [1000000,1000000,1000000], target = 1
输出：999999

解释：
Winston 输入函数的所有可能 [l,r] 数对得到的函数值都为 1000000 ，所以最小差值为 999999 。
```

- **示例 3：**

```txt
输入：arr = [1,2,4,8,16], target = 0
输出：0
```

---

**提示：**

- `1 <= arr.length <= 10^5`
- `1 <= arr[i] <= 10^6`
- `0 <= target <= 10^7`

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
