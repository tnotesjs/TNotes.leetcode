# [1325. 删除给定值的叶子节点【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1325.%20%E5%88%A0%E9%99%A4%E7%BB%99%E5%AE%9A%E5%80%BC%E7%9A%84%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/delete-leaves-with-a-given-value/)

给你一棵以 `root` 为根的二叉树和一个整数 `target` ，请你删除所有值为 `target` 的 叶子节点。

注意，一旦删除值为 `target` 的叶子节点，它的父节点就可能变成叶子节点；如果新叶子节点的值恰好也是 `target` ，那么这个节点也应该被删除。

也就是说，你需要重复此过程直到不能继续删除。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-32-19.png)

```txt
输入：root = [1,2,3,2,null,2,4], target = 2
输出：[1,null,3,null,4]
解释：
上面左边的图中，绿色节点为叶子节点，且它们的值与 target 相同（同为 2 ），它们会被删除，得到中间的图。
有一个新的节点变成了叶子节点且它的值与 target 相同，所以将再次进行删除，从而得到最右边的图。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-32-27.png)

```txt
输入：root = [1,3,3,3,2], target = 3
输出：[1,3,null,null,2]
```

- 示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-32-34.png)

```txt
输入：root = [1,2,null,2,null,2], target = 2
输出：[1]
解释：每一步都删除一个绿色的叶子节点（值为 2）。
```

---

提示：

- 树中节点数量的范围是 `[1, 3000]`。
- `1 <= Node.val, target <= 1000`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
