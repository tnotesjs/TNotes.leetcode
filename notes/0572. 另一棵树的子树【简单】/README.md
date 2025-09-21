# [0572. 另一棵树的子树【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0572.%20%E5%8F%A6%E4%B8%80%E6%A3%B5%E6%A0%91%E7%9A%84%E5%AD%90%E6%A0%91%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 递归](#2--s1---递归)
- [3. 🎯 s.2 - 字符串匹配](#3--s2---字符串匹配)

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

## 2. 🎯 s.1 - 递归

::: code-group

<<< ./solutions/1/1.js [js]

:::

- **时间复杂度**：$O(m \times n)$，其中 $m$ 是 root 树的节点数，$n$ 是 subRoot 树的节点数。最坏情况下，对 root 中的每个节点都需要与 subRoot 进行一次完全比较
- **空间复杂度**：$O(\max(h_1, h_2))$，其中 $h_1$ 和 $h_2$ 分别是两棵树的高度，主要是递归调用栈的空间消耗
- 解题思路：
  1. **判断两棵树是否相同**：编写辅助函数判断两个二叉树是否完全相同
  2. **遍历主树寻找匹配**：遍历主树的每个节点，判断以该节点为根的子树是否与目标子树相同

## 3. 🎯 s.2 - 字符串匹配

::: code-group

<<< ./solutions/2/1.js [js]

:::

- **时间复杂度**：$O(m \times n)$，其中 $m$ 和 $n$ 分别是两棵树的节点数，最坏情况下需要对主树每个节点与子树进行完全比较
- **空间复杂度**：$O(m + n)$，需要存储两棵树序列化后的字符串，空间复杂度为两树节点数之和
- 解题思路：
  - 通过序列化树为字符串再进行匹配，代码简洁但会造成额外的空间开销。
