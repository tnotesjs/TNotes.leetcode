# [0946. 验证栈序列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0946.%20%E9%AA%8C%E8%AF%81%E6%A0%88%E5%BA%8F%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/validate-stack-sequences/)

给定 `pushed` 和 `popped` 两个序列，每个序列中的 值都不重复，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 `true`；否则，返回 `false`。

---

示例 1：

```txt
输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
```

示例 2：

```txt
输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
输出：false
解释：1 不能在 2 之前弹出。
```

---

提示：

- `1 <= pushed.length <= 1000`
- `0 <= pushed[i] <= 1000`
- `pushed` 的所有元素 互不相同
- `popped.length == pushed.length`
- `popped` 是 `pushed` 的一个排列

## 2. 🎯 s.1 - 模拟栈

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度
- 空间复杂度：$O(n)$，栈空间

算法思路：

- 按 `pushed` 顺序依次入栈
- 每次入栈后，检查栈顶是否等于 `popped` 的当前元素，若相等则出栈，直到不匹配
- 最终栈为空则说明是有效的栈序列
