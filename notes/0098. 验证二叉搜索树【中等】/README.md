# [0098. 验证二叉搜索树【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0098.%20%E9%AA%8C%E8%AF%81%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 递归（上下界约束）](#2--s1---递归上下界约束)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/validate-binary-search-tree/)

给你一个二叉树的根节点 `root`，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

- 节点的左子树只包含 严格小于 当前节点的数。
- 节点的右子树只包含 严格大于 当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-53-59.png)

```txt
输入：root = [2,1,3]
输出：true
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-54-06.png)

```txt
输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5，但是右子节点的值是 4。
```

---

提示：

- 树中节点数目范围在`[1, 10^4]` 内
- `-2^31 <= Node.val <= 2^31 - 1`

## 2. 🎯 s.1 - 递归（上下界约束）

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是树的节点数
- 空间复杂度：$O(n)$，递归栈的深度

算法思路：

- BST 的每个节点必须满足一个开区间约束 `(lo, hi)`
- 根节点的约束为 `(-∞, +∞)`
- 访问左子树时，上界缩小为当前节点值；访问右子树时，下界增大为当前节点值
- 若节点值不在 `(lo, hi)` 内，则返回 `false`
