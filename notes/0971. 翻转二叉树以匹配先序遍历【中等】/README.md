# [0971. 翻转二叉树以匹配先序遍历【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0971.%20%E7%BF%BB%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91%E4%BB%A5%E5%8C%B9%E9%85%8D%E5%85%88%E5%BA%8F%E9%81%8D%E5%8E%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - DFS 先序遍历](#2--s1---dfs-先序遍历)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/flip-binary-tree-to-match-preorder-traversal/)

给你一棵二叉树的根节点 `root`，树中有 `n` 个节点，每个节点都有一个不同于其他节点且处于 `1` 到 `n` 之间的值。

另给你一个由 `n` 个值组成的行程序列 `voyage`，表示 预期 的二叉树 [先序遍历][1] 结果。

通过交换节点的左右子树，可以 翻转 该二叉树中的任意节点。例，翻转节点 1 的效果如下：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-07-54-54.png)

请翻转 最少 的树中节点，使二叉树的 先序遍历 与预期的遍历行程 `voyage` 相匹配。

如果可以，则返回 翻转的 所有节点的值的列表。你可以按任何顺序返回答案。如果不能，则返回列表 `[-1]`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-07-55-02.png)

```txt
输入：root = [1,2], voyage = [2,1]
输出：[-1]

解释：
翻转节点无法令先序遍历匹配预期行程。
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-07-55-08.png)

```txt
输入：root = [1,2,3], voyage = [1,3,2]
输出：[1]

解释：
交换节点 2 和 3 来翻转节点 1，先序遍历可以匹配预期行程。
```

---

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-07-55-13.png)

```txt
输入：root = [1,2,3], voyage = [1,2,3]
输出：[]

解释：
先序遍历已经匹配预期行程，所以不需要翻转节点。
```

---

提示：

- 树中的节点数目为 `n`
- `n == voyage.length`
- `1 <= n <= 100`
- `1 <= Node.val, voyage[i] <= n`
- 树中的所有值 互不相同
- `voyage` 中的所有值 互不相同

## 2. 🎯 s.1 - DFS 先序遍历

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$,其中 n 是树中节点数量,需要遍历所有节点一次
- 空间复杂度:$O(h)$,其中 h 是树的高度,递归栈的空间开销

算法思路:

- DFS 前序遍历:按照根-左-右的顺序遍历二叉树,同时用索引匹配 voyage 数组
- 节点值匹配:如果当前节点值与 voyage[index] 不匹配,说明无法通过翻转实现,返回 false
- 左子节点检查:如果左子节点存在但其值与 voyage 下一个位置不匹配,需要翻转当前节点
- 翻转操作:记录当前节点值到 flipped 数组,先遍历右子树再遍历左子树(相当于交换了左右子树的访问顺序)
- 正常遍历:如果不需要翻转,按正常顺序先遍历左子树再遍历右子树
- 结果返回:如果 DFS 成功返回 flipped 数组,否则返回 [-1]

## 3. 🔗 引用

- [前序遍历][1]

[1]: https://baike.baidu.com/item/%E5%85%88%E5%BA%8F%E9%81%8D%E5%8E%86/6442839?fr=aladdin
