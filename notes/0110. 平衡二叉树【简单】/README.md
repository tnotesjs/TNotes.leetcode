# [0110. 平衡二叉树【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0110.%20%E5%B9%B3%E8%A1%A1%E4%BA%8C%E5%8F%89%E6%A0%91%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/balanced-binary-tree/)

给定一个二叉树，判断它是否是 平衡二叉树

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-13-22-49.png)

```txt
输入：root = [3,9,20,null,null,15,7]
输出：true
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-13-23-06.png)

```txt
输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
```

- **示例 3：**

```txt
输入：root = []
输出：true
```

---

**提示：**

- 树中的节点数在范围 `[0, 5000]` 内
- `-10^4 <= Node.val <= 10^4`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
