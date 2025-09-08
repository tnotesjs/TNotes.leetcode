# [0905. 按奇偶排序数组【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0905.%20%E6%8C%89%E5%A5%87%E5%81%B6%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 Solutions.1 - 暴力解法](#2--solutions1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/sort-array-by-parity/)

给你一个整数数组 `nums`，将 `nums` 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。

返回满足此条件的 **任一数组** 作为答案。

---

- **示例 1：**

```txt
输入：nums = [3,1,2,4]
输出：[2,4,3,1]
解释：[4,2,3,1]、[2,4,1,3] 和 [4,2,1,3] 也会被视作正确答案。
```

- **示例 2：**

```txt
输入：nums = [0]
输出：[0]
```

---

**提示：**

- `1 <= nums.length <= 5000`
- `0 <= nums[i] <= 5000`

:::

## 2. 🎯 Solutions.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::
