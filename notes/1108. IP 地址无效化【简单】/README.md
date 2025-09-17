# [1108. IP 地址无效化【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1108.%20IP%20%E5%9C%B0%E5%9D%80%E6%97%A0%E6%95%88%E5%8C%96%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/defanging-an-ip-address/)

给你一个有效的 [IPv4](https://baike.baidu.com/item/IPv4) 地址 `address`，返回这个 IP 地址的无效化版本。

所谓无效化 IP 地址，其实就是用 `"[.]"` 代替了每个 `"."`。

---

- **示例 1：**

```txt
输入：address = "1.1.1.1"
输出："1[.]1[.]1[.]1"
```

- **示例 2：**

```txt
输入：address = "255.100.50.0"
输出："255[.]100[.]50[.]0"
```

---

**提示：**

- 给出的 `address` 是一个有效的 IPv4 地址

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
