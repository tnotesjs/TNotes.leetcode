# [0047. 全排列 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0047.%20%E5%85%A8%E6%8E%92%E5%88%97%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/permutations-ii/)

给定一个可包含重复数字的序列 `nums` ，**_按任意顺序_** 返回所有不重复的全排列。

---

- **示例 1：**

```txt
输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
```

- **示例 2：**

```txt
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

---

**提示：**

- `1 <= nums.length <= 8`
- `-10 <= nums[i] <= 10`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
