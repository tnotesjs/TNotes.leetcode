# [0938. 二叉搜索树的范围和【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0938.%20%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E7%9A%84%E8%8C%83%E5%9B%B4%E5%92%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/range-sum-of-bst/)

给定二叉搜索树的根结点  `root`，返回值位于范围 _`[low, high]`_ 之间的所有结点的值的和。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-12-14.png)

```txt
输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
输出：32
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-12-32.png)

```txt
输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
输出：23
```

---

**提示：**

- 树中节点数目在范围 `[1, 2 * 10^4]` 内
- `1 <= Node.val <= 10^5`
- `1 <= low <= high <= 10^5`
- 所有 `Node.val` **互不相同**

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
