# [1080. 根到叶路径上的不足节点【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1080.%20%E6%A0%B9%E5%88%B0%E5%8F%B6%E8%B7%AF%E5%BE%84%E4%B8%8A%E7%9A%84%E4%B8%8D%E8%B6%B3%E8%8A%82%E7%82%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/insufficient-nodes-in-root-to-leaf-paths/)

给你二叉树的根节点 `root` 和一个整数 `limit`，请你同时删除树中所有 不足节点，并返回最终二叉树的根节点。

假如通过节点 `node` 的每种可能的 “根-叶” 路径上值的总和全都小于给定的 `limit`，则该节点被称之为 不足节点，需要被删除。

叶子节点，就是没有子节点的节点。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-15-42-50.png)

```txt
输入：root = [1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14], limit = 1
输出：[1,2,3,4,null,null,7,8,9,null,14]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-15-42-56.png)

```txt
输入：root = [5,4,8,11,null,17,4,7,1,null,null,5,3], limit = 22
输出：[5,4,8,11,null,17,4,7,null,null,null,5]
```

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-15-43-02.png)

```txt
输入：root = [1,2,-3,-5,null,4,null], limit = -1
输出：[1,null,-3,4]
```

---

提示：

- 树中节点数目在范围 `[1, 5000]` 内
- `-10^5 <= Node.val <= 10^5`
- `-10^9 <= limit <= 10^9`

## 2. 🎯 s.1 - DFS

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是树的节点数
- 空间复杂度：$O(h)$，其中 $h$ 是树的高度，递归栈开销

算法思路：

- 后序 DFS，传递当前路径和
- 到达叶子节点时，若路径和 < limit 则删除（返回 null）
- 对内部节点，先递归处理左右子树，若左右子树都被删除则当前节点也删除
