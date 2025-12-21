# [1138. 字母板上的路径【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1138.%20%E5%AD%97%E6%AF%8D%E6%9D%BF%E4%B8%8A%E7%9A%84%E8%B7%AF%E5%BE%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/alphabet-board-path/)

我们从一块字母板上的位置 `(0, 0)` 出发，该坐标对应的字符为 `board[0][0]`。

在本题里，字母板为`board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"]`，如下所示。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-17-46-24.png)

我们可以按下面的指令规则行动：

- 如果方格存在，`'U'` 意味着将我们的位置上移一行；
- 如果方格存在，`'D'` 意味着将我们的位置下移一行；
- 如果方格存在，`'L'` 意味着将我们的位置左移一列；
- 如果方格存在，`'R'` 意味着将我们的位置右移一列；
- `'!'` 会把在我们当前位置 `(r, c)` 的字符 `board[r][c]` 添加到答案中。

（注意，字母板上只存在有字母的位置。）

返回指令序列，用最小的行动次数让答案和目标 `target` 相同。你可以返回任何达成目标的路径。

---

- 示例 1：

```txt
输入：target = "leet"
输出："DDR!UURRR!!DDD!"
```

- 示例 2：

```txt
输入：target = "code"
输出："RR!DDRR!UUL!R!"
```

---

提示：

- `1 <= target.length <= 100`
- `target` 仅含有小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
