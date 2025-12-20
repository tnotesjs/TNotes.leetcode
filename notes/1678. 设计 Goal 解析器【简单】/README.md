# [1678. 设计 Goal 解析器【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1678.%20%E8%AE%BE%E8%AE%A1%20Goal%20%E8%A7%A3%E6%9E%90%E5%99%A8%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/goal-parser-interpretation/)

请你设计一个可以解释字符串 `command` 的 Goal 解析器 。`command` 由 `"G"`、`"()"` 和/或 `"(al)"` 按某种顺序组成。Goal 解析器会将 `"G"` 解释为字符串 `"G"`、`"()"` 解释为字符串 `"o"` ，`"(al)"` 解释为字符串 `"al"` 。然后，按原顺序将经解释得到的字符串连接成一个字符串。

给你字符串 `command` ，返回 Goal 解析器 对 `command` 的解释结果。

---

- 示例 1：

```txt
输入：command = "G()(al)"
输出："Goal"
解释：Goal 解析器解释命令的步骤如下所示：
G -> G
() -> o
(al) -> al
最后连接得到的结果是 "Goal"
```

- 示例 2：

```txt
输入：command = "G()()()()(al)"
输出："Gooooal"
```

- 示例 3：

```txt
输入：command = "(al)G(al)()()G"
输出："alGalooG"
```

---

提示：

- `1 <= command.length <= 100`
- `command` 由 `"G"`、`"()"` 和/或 `"(al)"` 按某种顺序组成

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
