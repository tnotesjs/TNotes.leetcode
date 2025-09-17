# [0988. 从叶结点开始的最小字符串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0988.%20%E4%BB%8E%E5%8F%B6%E7%BB%93%E7%82%B9%E5%BC%80%E5%A7%8B%E7%9A%84%E6%9C%80%E5%B0%8F%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/smallest-string-starting-from-leaf/)

给定一颗根结点为 `root` 的二叉树，树中的每一个结点都有一个 `[0, 25]` 范围内的值，分别代表字母 `'a'` 到 `'z'`。

返回 **\*按字典序最小** 的字符串，该字符串从这棵树的一个叶结点开始，到根结点结束\*。

> 注**：**字符串中任何较短的前缀在 **字典序上** 都是 **较小** 的：
>
> - 例如，在字典序上 `"ab"` 比 `"aba"` 要小。叶结点是指没有子结点的结点。

节点的叶节点是没有子节点的节点。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-08-20-21.png)

```txt
输入：root = [0,1,2,3,4,3,4]
输出："dba"
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-08-20-28.png)

```txt
输入：root = [25,1,3,1,3,0,2]
输出："adz"
```

- **示例 3：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-08-20-49.png)

```txt
输入：root = [2,2,1,null,1,0,null,0]
输出："abc"
```

---

**提示：**

- 给定树的结点数在 `[1, 8500]` 范围内
- `0 <= Node.val <= 25`

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
