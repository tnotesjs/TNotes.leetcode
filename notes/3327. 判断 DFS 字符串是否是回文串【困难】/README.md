# [3327. 判断 DFS 字符串是否是回文串【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3327.%20%E5%88%A4%E6%96%AD%20DFS%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%98%AF%E5%90%A6%E6%98%AF%E5%9B%9E%E6%96%87%E4%B8%B2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-dfs-strings-are-palindromes/)

给你一棵 `n` 个节点的树，树的根节点为 0 ，`n` 个节点的编号为 `0` 到 `n - 1` 。这棵树用一个长度为 `n` 的数组 `parent` 表示，其中 `parent[i]` 是节点 `i` 的父节点。由于节点 0 是根节点，所以 `parent[0] == -1` 。

给你一个长度为 `n` 的字符串 `s` ，其中 `s[i]` 是节点 `i` 对应的字符。

一开始你有一个空字符串 `dfsStr` ，定义一个递归函数 `dfs(int x)` ，它的输入是节点 `x` ，并依次执行以下操作：

- 按照 **节点编号升序** 遍历 `x` 的所有孩子节点 `y` ，并调用 `dfs(y)` 。
- 将 字符 `s[x]` 添加到字符串 `dfsStr` 的末尾。

**注意，**所有递归函数 `dfs` 都共享全局变量 `dfsStr` 。

你需要求出一个长度为 `n` 的布尔数组 `answer` ，对于 `0` 到 `n - 1` 的每一个下标 `i` ，你需要执行以下操作：

- 清空字符串 `dfsStr` 并调用 `dfs(i)` 。
- 如果结果字符串 `dfsStr` 是一个 回文串 ，`answer[i]` 为 `true` ，否则 `answer[i]` 为 `false` 。

> - 回文 串是向前和向后读都相同的字符串。

请你返回字符串 `answer` 。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-13-47.png)

**输入：** parent = [-1,0,0,1,1,2], s = "aababa"

**输出：** [true,true,false,true,true,true]

**解释：**

- 调用 `dfs(0)` ，得到字符串 `dfsStr = "abaaba"` ，是一个回文串。
- 调用 `dfs(1)` ，得到字符串`dfsStr = "aba"` ，是一个回文串。
- 调用 `dfs(2)` ，得到字符串`dfsStr = "ab"` ，**不** 是回文串。
- 调用 `dfs(3)` ，得到字符串`dfsStr = "a"` ，是一个回文串。
- 调用 `dfs(4)` ，得到字符串 `dfsStr = "b"` ，是一个回文串。
- 调用 `dfs(5)` ，得到字符串 `dfsStr = "a"` ，是一个回文串。

---

- **示例 2：**

![](https://assets.leetcode.com/uploads/2024/09/01/tree2drawio-1.png)

**输入：** parent = [-1,0,0,0,0], s = "aabcb"

**输出：** [true,true,true,true,true]

**解释：**

每一次调用 `dfs(x)` 都得到一个回文串。

---

**提示：**

- `n == parent.length == s.length`
- `1 <= n <= 10^5`
- 对于所有 `i >= 1` ，都有 `0 <= parent[i] <= n - 1` 。
- `parent[0] == -1`
- `parent` 表示一棵合法的树。
- `s` 只包含小写英文字母。

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
