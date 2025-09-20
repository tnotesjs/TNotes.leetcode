# [1379. 找出克隆二叉树中的相同节点【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1379.%20%E6%89%BE%E5%87%BA%E5%85%8B%E9%9A%86%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E7%9A%84%E7%9B%B8%E5%90%8C%E8%8A%82%E7%82%B9%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/)

给你两棵二叉树，原始树 `original` 和克隆树 `cloned`，以及一个位于原始树 `original` 中的目标节点 `target`。

其中，克隆树 `cloned` 是原始树 `original` 的一个 **副本** 。

请找出在树 `cloned` 中，与 `target` **相同** 的节点，并返回对该节点的引用（在 C/C++ 等有指针的语言中返回 节点指针，其他语言返回节点本身）。

---

**注意：** 你 **不能** 对两棵二叉树，以及 `target` 节点进行更改。**只能** 返回对克隆树 `cloned` 中已有的节点的引用。

---

- **示例 1:**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-57-07.png)

```txt
输入: tree = [7,4,3,null,null,6,19], target = 3
输出: 3
解释: 上图画出了树 original 和 cloned。target 节点在树 original 中，用绿色标记。答案是树 cloned 中的黄颜色的节点（其他示例类似）。
```

- **示例 2:**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-57-24.png)

```txt
输入: tree = [7], target =  7
输出: 7
```

- **示例 3:**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-57-29.png)

```txt
输入: tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4
输出: 4
```

---

**提示：**

- 树中节点的数量范围为 `[1, 10^4]` 。
- 同一棵树中，没有值相同的节点。
- `target` 节点是树 `original` 中的一个节点，并且不会是 `null` 。

---

**进阶：** 如果树中允许出现值相同的节点，将如何解答？

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
