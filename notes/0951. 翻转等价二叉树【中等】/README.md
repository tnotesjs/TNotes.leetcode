# [0951. 翻转等价二叉树【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0951.%20%E7%BF%BB%E8%BD%AC%E7%AD%89%E4%BB%B7%E4%BA%8C%E5%8F%89%E6%A0%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/flip-equivalent-binary-trees/)

我们可以为二叉树 T 定义一个 翻转操作，如下所示：选择任意节点，然后交换它的左子树和右子树。

只要经过一定次数的翻转操作后，能使 X 等于 Y，我们就称二叉树 X _翻转 等价_ 于二叉树 Y。

这些树由根节点 `root1` 和 `root2` 给出。如果两个二叉树是否是*翻转 等价* 的树，则返回 `true`，否则返回 `false`。

---

示例 1：

![Flipped Trees Diagram](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-19-02.png)

```txt
输入：root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
输出：true
解释：我们翻转值为 1，3 以及 5 的三个节点。
```

示例 2：

```txt
输入: root1 = [], root2 = []
输出: true
```

示例 3：

```txt
输入: root1 = [], root2 = [1]
输出: false
```

---

提示：

- 每棵树节点数在 `[0, 100]` 范围内
- 每棵树中的每个值都是唯一的、在 `[0, 99]` 范围内的整数

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
