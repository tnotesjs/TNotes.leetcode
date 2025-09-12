# [0572. 另一棵树的子树【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0572.%20%E5%8F%A6%E4%B8%80%E6%A3%B5%E6%A0%91%E7%9A%84%E5%AD%90%E6%A0%91%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/subtree-of-another-tree/)

给你两棵二叉树 `root` 和 `subRoot` 。检验 `root` 中是否包含和 `subRoot` 具有相同结构和节点值的子树。如果存在，返回 `true` ；否则，返回 `false` 。

二叉树 `tree` 的一棵子树包括 `tree` 的某个节点和这个节点的所有后代节点。`tree` 也可以看做它自身的一棵子树。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-17-36-33.png)

```txt
输入：root = [3,4,5,1,2], subRoot = [4,1,2]
输出：true
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-17-36-37.png)

```txt
输入：root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
输出：false
```

---

**提示：**

- `root` 树上的节点数量范围是 `[1, 2000]`
- `subRoot` 树上的节点数量范围是 `[1, 1000]`
- `-10^4 <= root.val <= 10^4`
- `-10^4 <= subRoot.val <= 10^4`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
