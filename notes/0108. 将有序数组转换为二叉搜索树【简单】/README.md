# [0108. 将有序数组转换为二叉搜索树【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0108.%20%E5%B0%86%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E8%BD%AC%E6%8D%A2%E4%B8%BA%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree)

给你一个整数数组 `nums`，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-02-07-02-27.png)

输入：nums = [-10,-3,0,5,9]

输出：[0,-3,9,-10,null,5]

解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-02-07-02-39.png)

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-02-07-02-55.png)

输入：nums = [1,3]

输出：[3,1]

解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。

---

提示：

- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` 按 严格递增 顺序排列

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::
