# [0530. 二叉搜索树的最小绝对差【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0530.%20%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E7%9A%84%E6%9C%80%E5%B0%8F%E7%BB%9D%E5%AF%B9%E5%B7%AE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-absolute-difference-in-bst/)

给你一个二叉搜索树的根节点 `root` ，返回 **树中任意两不同节点值之间的最小差值** 。

差值是一个正数，其数值等于两值之差的绝对值。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-41-13.png)

```txt
输入：root = [4,2,6,1,3]
输出：1
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-41-17.png)

```txt
输入：root = [1,0,48,null,null,12,49]
输出：1
```

---

**提示：**

- 树中节点的数目范围是 `[2, 10^4]`
- `0 <= Node.val <= 10^5`

---

**注意：** 本题与 [783. 二叉搜索树节点最小距离][1] 相同

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🔗 引用

- [783. 二叉搜索树节点最小距离][1]

[1]: https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/
