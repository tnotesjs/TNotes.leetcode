# [0297. 二叉树的序列化与反序列化【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0297.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%BA%8F%E5%88%97%E5%8C%96%E4%B8%8E%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/)

序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

---

**提示:** 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 [LeetCode 序列化二叉树的格式][1]。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-22-06-27.png)

```txt
输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]
```

- **示例 2：**

```txt
输入：root = []
输出：[]
```

- **示例 3：**

```txt
输入：root = [1]
输出：[1]
```

- **示例 4：**

```txt
输入：root = [1,2]
输出：[1,2]
```

---

**提示：**

- 树中结点数在范围 `[0, 10^4]` 内
- `-1000 <= Node.val <= 1000`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🔗 引用

- [LeetCode 序列化二叉树的格式][1]
  - leetcode support

[1]: https://support.leetcode.cn/hc/kb/article/1567641/
