# [0653. 两数之和 IV - 输入二叉搜索树【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0653.%20%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C%20IV%20-%20%E8%BE%93%E5%85%A5%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/two-sum-iv-input-is-a-bst/)

给定一个二叉搜索树 `root` 和一个目标结果 `k`，如果二叉搜索树中存在两个元素且它们的和等于给定的目标结果，则返回 `true`。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-20-24.png)

```txt
输入: root = [5,3,6,2,4,null,7], k = 9
输出: true
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-20-28.png)

```txt
输入: root = [5,3,6,2,4,null,7], k = 28
输出: false
```

---

**提示:**

- 二叉树的节点个数的范围是   `[1, 10^4]`.
- `-10^4 <= Node.val <= 10^4`
- 题目数据保证，输入的 `root` 是一棵 **有效** 的二叉搜索树
- `-10^5 <= k <= 10^5`

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
