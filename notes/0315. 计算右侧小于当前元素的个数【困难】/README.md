# [0315. 计算右侧小于当前元素的个数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0315.%20%E8%AE%A1%E7%AE%97%E5%8F%B3%E4%BE%A7%E5%B0%8F%E4%BA%8E%E5%BD%93%E5%89%8D%E5%85%83%E7%B4%A0%E7%9A%84%E4%B8%AA%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-of-smaller-numbers-after-self/)

给你一个整数数组 `nums` ，按要求返回一个新数组 `counts` 。数组 `counts` 有该性质： `counts[i]` 的值是 `nums[i]` 右侧小于 `nums[i]` 的元素的数量。

---

- **示例 1：**

```txt
输入：nums = [5,2,6,1]
输出：[2,1,1,0]
解释：
5 的右侧有 2 个更小的元素 (2 和 1)
2 的右侧仅有 1 个更小的元素 (1)
6 的右侧有 1 个更小的元素 (1)
1 的右侧有 0 个更小的元素
```

- **示例 2：**

```txt
输入：nums = [-1]
输出：[0]
```

- **示例 3：**

```txt
输入：nums = [-1,-1]
输出：[0,0]
```

---

**提示：**

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
