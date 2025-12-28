# [2011. 执行操作后的变量值【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2011.%20%E6%89%A7%E8%A1%8C%E6%93%8D%E4%BD%9C%E5%90%8E%E7%9A%84%E5%8F%98%E9%87%8F%E5%80%BC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/final-value-of-variable-after-performing-operations/)

存在一种仅支持 4 种操作和 1 个变量 `X` 的编程语言：

- `++X` 和 `X++` 使变量 `X` 的值 加 `1`
- `--X` 和 `X--` 使变量 `X` 的值 减 `1`

最初，`X` 的值是 `0`

给你一个字符串数组 `operations` ，这是由操作组成的一个列表，返回执行所有操作后， `X` 的 最终值。

---

- 示例 1：

```txt
输入：operations = ["--X","X++","X++"]
输出：1
解释：操作按下述步骤执行：
最初，X = 0
--X：X 减 1 ，X =  0 - 1 = -1
X++：X 加 1 ，X = -1 + 1 =  0
X++：X 加 1 ，X =  0 + 1 =  1
```

- 示例 2：

```txt
输入：operations = ["++X","++X","X++"]
输出：3
解释：操作按下述步骤执行：
最初，X = 0
++X：X 加 1 ，X = 0 + 1 = 1
++X：X 加 1 ，X = 1 + 1 = 2
X++：X 加 1 ，X = 2 + 1 = 3
```

- 示例 3：

```txt
输入：operations = ["X++","++X","--X","X--"]
输出：0
解释：操作按下述步骤执行：
最初，X = 0
X++：X 加 1 ，X = 0 + 1 = 1
++X：X 加 1 ，X = 1 + 1 = 2
--X：X 减 1 ，X = 2 - 1 = 1
X--：X 减 1 ，X = 1 - 1 = 0
```

---

提示：

- `1 <= operations.length <= 100`
- `operations[i]` 将会是 `"++X"`、`"X++"`、`"--X"` 或 `"X--"`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
