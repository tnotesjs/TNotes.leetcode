# [0652. 寻找重复的子树【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0652.%20%E5%AF%BB%E6%89%BE%E9%87%8D%E5%A4%8D%E7%9A%84%E5%AD%90%E6%A0%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-duplicate-subtrees/)

给你一棵二叉树的根节点 `root` ，返回所有 **重复的子树** 。

对于同一类的重复子树，你只需要返回其中任意 **一棵** 的根结点即可。

如果两棵树具有 **相同的结构** 和 **相同的结点值** ，则认为二者是 **重复** 的。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-19-35.png)

```txt
输入：root = [1,2,3,4,null,2,4,null,null,4]
输出：[[2,4],[4]]
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-19-44.png)

```txt
输入：root = [2,1,1]
输出：[[1]]
```

- **示例 3：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-19-50.png)

```txt
输入：root = [2,2,2,3,null,3,null]
输出：[[2,3],[3]]
```

---

**提示：**

- 树中的结点数在 `[1, 5000]` 范围内。
- `-200 <= Node.val <= 200`

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
