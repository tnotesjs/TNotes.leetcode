# [2520. 统计能整除数字的位数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2520.%20%E7%BB%9F%E8%AE%A1%E8%83%BD%E6%95%B4%E9%99%A4%E6%95%B0%E5%AD%97%E7%9A%84%E4%BD%8D%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 模拟](#2--s1---模拟)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-the-digits-that-divide-a-number/)

给你一个整数 `num`，返回 `num` 中能整除 `num` 的数位的数目。

如果满足 `nums % val == 0`，则认为整数 `val` 可以整除 `nums`。

---

示例 1：

```txt
输入：num = 7
输出：1

解释：
7 被自己整除，因此答案是 1。
```

---

示例 2：

```txt
输入：num = 121
输出：2

解释：
121 可以被 1 整除，但无法被 2 整除。由于 1 出现两次，所以返回 2。
```

---

示例 3：

```txt
输入：num = 1248
输出：4

解释：
1248 可以被它每一位上的数字整除，因此答案是 4。
```

---

提示：

- `1 <= num <= 10^9`
- `num` 的数位中不含 `0`

## 2. 🎯 s.1 - 模拟

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度:$O(\log num)$,数字有 $\log num$ 位
- 空间复杂度:$O(1)$,只使用常数额外空间

算法思路:

- 使用循环遍历数字的每一位,通过 `num % 10` 获取最后一位数字
- 检查该位数字是否能整除原数字 `num`,若能则计数器加1
- 通过 `Math.floor(num / 10)` 去掉最后一位,继续处理剩余数字
- 返回统计的计数结果
