# [0814. 二叉树剪枝【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0814.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E5%89%AA%E6%9E%9D%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/binary-tree-pruning/)

给你二叉树的根结点 `root` ，此外树的每个结点的值要么是 `0` ，要么是 `1` 。

返回移除了所有不包含 `1` 的子树的原二叉树。

节点 `node` 的子树为 `node` 本身加上所有 `node` 的后代。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-08-07-30.png)

```txt
输入：root = [1,null,0,0,1]
输出：[1,null,0,null,1]
解释：
只有红色节点满足条件“所有不包含 1 的子树”。 右图为返回的答案。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-08-07-36.png)

```txt
输入：root = [1,0,1,0,0,0,1]
输出：[1,null,1,null,1]
```

- **示例 3：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-08-07-43.png)

```txt
输入：root = [1,1,0,1,1,0,1,0]
输出：[1,1,0,1,1,null,1]
```

---

**提示：**

- 树中节点的数目在范围 `[1, 200]` 内
- `Node.val` 为 `0` 或 `1`

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
