# [3522. 执行指令后的得分【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3522.%20%E6%89%A7%E8%A1%8C%E6%8C%87%E4%BB%A4%E5%90%8E%E7%9A%84%E5%BE%97%E5%88%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/calculate-score-after-performing-instructions/)

给你两个数组：`instructions` 和 `values`，数组的长度均为 `n`。

你需要根据以下规则模拟一个过程：

- 从下标 `i = 0` 的第一个指令开始，初始得分为 0。
- 如果 `instructions[i]` 是 `"add"`：
  - 将 `values[i]` 加到你的得分中。
  - 移动到下一个指令 `(i + 1)`。
- 如果 `instructions[i]` 是 `"jump"`：
  - 移动到下标为 `(i + values[i])` 的指令，但不修改你的得分。

当以下任一情况发生时，过程会终止：

- 越界（即 `i < 0` 或 `i >= n`），或
- 尝试再次执行已经执行过的指令。被重复访问的指令不会再次执行。

返回过程结束时的得分。

---

示例 1：

输入： instructions = ["jump","add","add","jump","add","jump"], values = [2,1,3,1,-2,-3]

输出： 1

解释：

从下标 0 开始模拟过程：

- 下标 0：指令是 `"jump"`，移动到下标 `0 + 2 = 2`。
- 下标 2：指令是 `"add"`，将 `values[2] = 3` 加到得分中，移动到下标 3。得分变为 3。
- 下标 3：指令是 `"jump"`，移动到下标 `3 + 1 = 4`。
- 下标 4：指令是 `"add"`，将 `values[4] = -2` 加到得分中，移动到下标 5。得分变为 1。
- 下标 5：指令是 `"jump"`，移动到下标 `5 + (-3) = 2`。
- 下标 2：已经访问过。过程结束。

---

示例 2：

输入： instructions = ["jump","add","add"], values = [3,1,1]

输出： 0

解释：

从下标 0 开始模拟过程：

- 下标 0：指令是 `"jump"`，移动到下标 `0 + 3 = 3`。
- 下标 3：越界。过程结束。

---

示例 3：

输入： instructions = ["jump"], values = [0]

输出： 0

解释：

从下标 0 开始模拟过程：

- 下标 0：指令是 `"jump"`，移动到下标 `0 + 0 = 0`。
- 下标 0：已经访问过。过程结束。

---

提示：

- `n == instructions.length == values.length`
- `1 <= n <= 10^5`
- `instructions[i]` 只能是 `"add"` 或 `"jump"`。
- `-10^5 <= values[i] <= 10^5`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
