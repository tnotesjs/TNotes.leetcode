# [1305. 两棵二叉搜索树中的所有元素【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1305.%20%E4%B8%A4%E6%A3%B5%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E6%89%80%E6%9C%89%E5%85%83%E7%B4%A0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 中序遍历 + 归并](#2--s1---中序遍历--归并)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/all-elements-in-two-binary-search-trees/)

给你 `root1` 和 `root2` 这两棵二叉搜索树。请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。.

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-18-19-38-52.png)

```txt
输入：root1 = [2,1,4], root2 = [1,0,3]
输出：[0,1,1,2,3,4]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-18-19-38-57.png)

```txt
输入：root1 = [1,null,8], root2 = [8,1]
输出：[1,1,8,8]
```

---

提示：

- 每棵树的节点数在 `[0, 5000]` 范围内
- `-10^5 <= Node.val <= 10^5`

## 2. 🎯 s.1 - 中序遍历 + 归并

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m + n)$，其中 $m$ 和 $n$ 分别是两棵 BST 的节点数
- 空间复杂度：$O(m + n)$，存储两个有序数组和结果数组

算法思路：

- 分别对两棵 BST 进行中序遍历，得到两个有序数组
- 使用双指针归并两个有序数组，合并为一个有序的结果数组
