# [1013. 将数组分成和相等的三个部分【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1013.%20%E5%B0%86%E6%95%B0%E7%BB%84%E5%88%86%E6%88%90%E5%92%8C%E7%9B%B8%E7%AD%89%E7%9A%84%E4%B8%89%E4%B8%AA%E9%83%A8%E5%88%86%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/partition-array-into-three-parts-with-equal-sum/)

给你一个整数数组 `arr`，只有可以将其划分为三个和相等的 **非空** 部分时才返回  `true`，否则返回 `false`。

形式上，如果可以找出索引  `i + 1 < j`  且满足  `(arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])`  就可以将数组三等分。

---

- **示例 1：**

```txt
输入：arr = [0,2,1,-6,6,-7,9,1,2,0,1]
输出：true
解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
```

- **示例 2：**

```txt
输入：arr = [0,2,1,-6,6,7,9,-1,2,0,1]
输出：false
```

- **示例 3：**

```txt
输入：arr = [3,3,6,5,-2,2,5,1,-9,4]
输出：true
解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
```

---

**提示：**

- `3 <= arr.length <= 5 * 10^4`
- `-10^4 <= arr[i] <= 10^4`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，只需要遍历数组一次
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间
