# [0501. 二叉搜索树中的众数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0501.%20%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E4%BC%97%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 普通中序遍历](#2--s1---普通中序遍历)
- [3. 🎯 s.2 - Morris 遍历](#3--s2---morris-遍历)
- [4. 🔗 引用](#4--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-mode-in-binary-search-tree/)

给你一个含重复值的二叉搜索树（BST）的根节点 `root` ，找出并返回 BST 中的所有 [众数][1]（即，出现频率最高的元素）。

如果树中有不止一个众数，可以按 **任意顺序** 返回。

假定 BST 满足如下定义：

- 结点左子树中所含节点的值 **小于等于** 当前节点的值
- 结点右子树中所含节点的值 **大于等于** 当前节点的值
- 左子树和右子树都是二叉搜索树

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-27-12.png)

```txt
输入：root = [1,null,2,2]
输出：[2]
```

- **示例 2：**

```txt
输入：root = [0]
输出：[0]
```

---

**提示：**

- 树中节点的数目在范围 `[1, 10^4]` 内
- `-10^5 <= Node.val <= 10^5`

**进阶：** 你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）

## 2. 🎯 s.1 - 普通中序遍历

::: code-group

<<< ./solutions/1/1.js [js]

:::

- **时间复杂度**：$O(n)$，其中 n 是二叉搜索树的节点数，需要遍历每个节点一次
- **空间复杂度**：$O(h)$，其中 h 是二叉搜索树的高度，递归调用栈的深度。平均情况下为 $O(\log n)$，最坏情况下为 $O(n)$

## 3. 🎯 s.2 - Morris 遍历

::: code-group

<<< ./solutions/2/1.js [js]

:::

- **时间复杂度**：$O(n)$，需要遍历每个节点一次
- **空间复杂度**：$O(1)$，只使用了常数个额外变量（不考虑结果数组）
- Morris 遍历算法在知识库 `TNotes.algorithms` 中有记录 -> [0007. Morris 遍历][4]。

## 4. 🔗 引用

- [众数][1]
  - 百度百科
- [bilibili - 【Manim】Morris 中序遍历可视化][2]
- [知乎 - 神级遍历——morris][3]
- [TNotes.algorithms - 0007. Morris 遍历][4]

[1]: https://baike.baidu.com/item/%E4%BC%97%E6%95%B0/44796
[2]: https://www.bilibili.com/video/BV17H4y1p7DD/
[3]: https://zhuanlan.zhihu.com/p/101321696
[4]: https://tnotesjs.github.io/TNotes.algorithms/notes/0007.%20Morris%20%E9%81%8D%E5%8E%86/README
