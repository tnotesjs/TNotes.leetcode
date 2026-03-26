# [2433. 找出前缀异或的原始数组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2433.%20%E6%89%BE%E5%87%BA%E5%89%8D%E7%BC%80%E5%BC%82%E6%88%96%E7%9A%84%E5%8E%9F%E5%A7%8B%E6%95%B0%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-original-array-of-prefix-xor/)

给你一个长度为 `n` 的 整数 数组 `pref`。找出并返回满足下述条件且长度为 `n` 的数组 `arr` ：

- `pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i]`.

注意 `^` 表示 按位异或（bitwise-xor）运算。

可以证明答案是 唯一 的。

---

示例 1：

```txt
输入：pref = [5,2,0,3,1]
输出：[5,7,2,3,2]
解释：从数组 [5,7,2,3,2] 可以得到如下结果：
- pref[0] = 5
- pref[1] = 5 ^ 7 = 2
- pref[2] = 5 ^ 7 ^ 2 = 0
- pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3
- pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1
```

示例 2：

```txt
输入：pref = [13]
输出：[13]
解释：pref[0] = arr[0] = 13
```

---

提示：

- `1 <= pref.length <= 10^5`
- `0 <= pref[i] <= 10^6`

## 2. 🎯 s.1 - 异或还原

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度
- 空间复杂度：$O(n)$

算法思路：

- 前缀异或数组 pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i]
- 原数组 arr[0] = pref[0]，arr[i] = pref[i] ^ pref[i-1] (i > 0)
- 直接遍历还原即可
