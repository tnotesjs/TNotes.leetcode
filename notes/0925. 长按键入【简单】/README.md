# [0925. 长按键入【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0925.%20%E9%95%BF%E6%8C%89%E9%94%AE%E5%85%A5%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/long-pressed-name/)

你的朋友正在使用键盘输入他的名字 `name`。偶尔，在键入字符 `c` 时，按键可能会被长按，而字符可能被输入 1 次或多次。

你将会检查键盘输入的字符 `typed`。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 `True`。

---

- 示例 1：

```txt
输入：name = "alex", typed = "aaleex"
输出：true
解释：'alex' 中的 'a' 和 'e' 被长按。
```

- 示例 2：

```txt
输入：name = "saeed", typed = "ssaaedd"
输出：false
解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
```

---

提示：

- `1 <= name.length, typed.length <= 1000`
- `name` 和 `typed` 的字符都是小写字母

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n + m)$，其中 $n=|name|$，$m=|typed|$
- 空间复杂度：$O(1)$

解题思路：

- 双指针：`i` 遍历 `name`，`j` 遍历 `typed`
- 若 `name[i] == typed[j]`，同时前进；否则仅当 `typed[j] == typed[j-1]` 视为长按，前进 `j`
- 出现其它不匹配立即返回 `false`；最终需 `i == name.length` 才表示 `name` 全部匹配完成
