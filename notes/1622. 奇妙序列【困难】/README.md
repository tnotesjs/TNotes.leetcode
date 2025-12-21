# [1622. 奇妙序列【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1622.%20%E5%A5%87%E5%A6%99%E5%BA%8F%E5%88%97%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/fancy-sequence/)

请你实现三个 API `append`，`addAll` 和 `multAll` 来实现奇妙序列。

请实现 `Fancy` 类 ：

- `Fancy()` 初始化一个空序列对象。
- `void append(val)` 将整数 `val` 添加在序列末尾。
- `void addAll(inc)` 将所有序列中的现有数值都增加 `inc` 。
- `void multAll(m)` 将序列中的所有现有数值都乘以整数 `m` 。
- `int getIndex(idx)` 得到下标为 `idx` 处的数值（下标从 0 开始），并将结果对 `10^9 + 7` 取余。如果下标大于等于序列的长度，请返回 `-1` 。

示例：

```txt
输入：
["Fancy", "append", "addAll", "append", "multAll", "getIndex", "addAll", "append", "multAll", "getIndex", "getIndex", "getIndex"]
[[], [2], [3], [7], [2], [0], [3], [10], [2], [0], [1], [2]]
输出：
[null, null, null, null, null, 10, null, null, null, 26, 34, 20]

解释：
Fancy fancy = new Fancy();
fancy.append(2);   // 奇妙序列：[2]
fancy.addAll(3);   // 奇妙序列：[2+3] -> [5]
fancy.append(7);   // 奇妙序列：[5, 7]
fancy.multAll(2);  // 奇妙序列：[5*2, 7*2] -> [10, 14]
fancy.getIndex(0); // 返回 10
fancy.addAll(3);   // 奇妙序列：[10+3, 14+3] -> [13, 17]
fancy.append(10);  // 奇妙序列：[13, 17, 10]
fancy.multAll(2);  // 奇妙序列：[13*2, 17*2, 10*2] -> [26, 34, 20]
fancy.getIndex(0); // 返回 26
fancy.getIndex(1); // 返回 34
fancy.getIndex(2); // 返回 20
```

---

提示：

- `1 <= val, inc, m <= 100`
- `0 <= idx <= 10^5`
- 总共最多会有 `10^5` 次对 `append`，`addAll`，`multAll` 和 `getIndex` 的调用。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
