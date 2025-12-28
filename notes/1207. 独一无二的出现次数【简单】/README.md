# [1207. 独一无二的出现次数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1207.%20%E7%8B%AC%E4%B8%80%E6%97%A0%E4%BA%8C%E7%9A%84%E5%87%BA%E7%8E%B0%E6%AC%A1%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/unique-number-of-occurrences/)

给你一个整数数组 `arr`，如果每个数的出现次数都是独一无二的，就返回 `true`；否则返回 `false`。

---

示例 1：

```txt
输入：arr = [1,2,2,1,1,3]
输出：true

解释：
在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。
没有两个数的出现次数相同。
```

---

示例 2：

```txt
输入：arr = [1,2]
输出：false
```

---

示例 3：

```txt
输入：arr = [-3,0,1,-3,1,1,1,-3,10,0]
输出：true
```

---

提示：

- `1 <= arr.length <= 1000`
- `-1000 <= arr[i] <= 1000`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
