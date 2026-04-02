# [0721. 账户合并【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0721.%20%E8%B4%A6%E6%88%B7%E5%90%88%E5%B9%B6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 并查集](#2--s1---并查集)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/accounts-merge/)

给定一个列表 `accounts`，每个元素 `accounts[i]` 是一个字符串列表，其中第一个元素 `accounts[i][0]` 是 _名称 (name)_，其余元素是 _emails_ 表示该账户的邮箱地址。

现在，我们想合并这些账户。如果两个账户都有一些共同的邮箱地址，则两个账户必定属于同一个人。请注意，即使两个账户具有相同的名称，它们也可能属于不同的人，因为人们可能具有相同的名称。一个人最初可以拥有任意数量的账户，但其所有账户都具有相同的名称。

合并账户后，按以下格式返回账户：每个账户的第一个元素是名称，其余元素是 按字符 ASCII 顺序排列 的邮箱地址。账户本身可以以 任意顺序 返回。

---

示例 1：

```txt
输入：
accounts = [
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["John", "johnnybravo@mail.com"],
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["Mary", "mary@mail.com"]
]

输出：
[
  ["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"],
  ["John", "johnnybravo@mail.com"],
  ["Mary", "mary@mail.com"]
]

解释：
第一个和第三个 John 是同一个人，因为他们有共同的邮箱地址 "johnsmith@mail.com"。
第二个 John 和 Mary 是不同的人，因为他们的邮箱地址没有被其他帐户使用。
可以以任何顺序返回这些列表，例如答案
[
  ["Mary", "mary@mail.com"],
  ["John", "johnnybravo@mail.com"],
  ["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"]
]
也是正确的。
```

示例 2：

```txt
输入：
accounts = [
  ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe1@m.co"],
  ["Kevin", "Kevin3@m.co", "Kevin5@m.co", "Kevin0@m.co"],
  ["Ethan", "Ethan5@m.co", "Ethan4@m.co", "Ethan0@m.co"],
  ["Hanzo", "Hanzo3@m.co", "Hanzo1@m.co", "Hanzo0@m.co"],
  ["Fern", "Fern5@m.co", "Fern1@m.co", "Fern0@m.co"]
]

输出：
[
  ["Ethan", "Ethan0@m.co", "Ethan4@m.co", "Ethan5@m.co"],
  ["Gabe", "Gabe0@m.co", "Gabe1@m.co", "Gabe3@m.co"],
  ["Hanzo", "Hanzo0@m.co", "Hanzo1@m.co", "Hanzo3@m.co"],
  ["Kevin", "Kevin0@m.co", "Kevin3@m.co", "Kevin5@m.co"],
  ["Fern", "Fern0@m.co", "Fern1@m.co", "Fern5@m.co"]
]
```

---

提示：

- `1 <= accounts.length <= 1000`
- `2 <= accounts[i].length <= 10`
- `1 <= accounts[i][j].length <= 30`
- `accounts[i][0]` 由英文字母组成
- `accounts[i][j] (for j > 0)` 是有效的邮箱地址

## 2. 🎯 s.1 - 并查集

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \times l \times \alpha(n))$，其中 n 是邮箱总数，l 是邮箱平均长度
- 空间复杂度：$O(n \times l)$

算法思路：

- 用并查集合并同一账户的邮箱，同时记录邮箱到用户名的映射
- 将同一账户中的所有邮箱与第一个邮箱合并
- 最后按根分组，排序后输出
