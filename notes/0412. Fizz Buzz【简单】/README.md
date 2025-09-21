# [0412. Fizz Buzz【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0412.%20Fizz%20Buzz%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/fizz-buzz/)

给你一个整数 `n` ，返回一个字符串数组 `answer`（**下标从 1 开始**），其中：

- `answer[i] == "FizzBuzz"` 如果 `i` 同时是 `3` 和 `5` 的倍数。
- `answer[i] == "Fizz"` 如果 `i` 是 `3` 的倍数。
- `answer[i] == "Buzz"` 如果 `i` 是 `5` 的倍数。
- `answer[i] == i` （以字符串形式）如果上述条件全不满足。

---

- **示例 1：**

```txt
输入：n = 3
输出：["1","2","Fizz"]
```

- **示例 2：**

```txt
输入：n = 5
输出：["1","2","Fizz","4","Buzz"]
```

- **示例 3：**

```txt
输入：n = 15
输出：["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

---

**提示：**

- `1 <= n <= 10^4`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/2.js [js（简化版）]

:::

- **时间复杂度**：$O(n)$，需要遍历从 1 到 n 的每个数字
- **空间复杂度**：$O(1)$，不考虑返回数组的情况下，只使用了常数级别的额外空间
- 解题思路：
  - 根据题目描述逐步翻译即可
