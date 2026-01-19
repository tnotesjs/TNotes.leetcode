# [1147. 段式回文【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1147.%20%E6%AE%B5%E5%BC%8F%E5%9B%9E%E6%96%87%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-chunked-palindrome-decomposition/)

你会得到一个字符串 `text`。你应该把它分成 `k` 个子字符串 `(subtext1, subtext2，…， subtextk)`，要求满足:

- `subtexti` 是 非空 字符串
- 所有子字符串的连接等于 `text` ( 即`subtext1 + subtext2 + ... + subtextk == text` )
- 对于所有 i 的有效值( 即 `1 <= i <= k` )，`subtexti == subtextk - i + 1` 均成立

返回`k`可能最大值。

---

示例 1：

```txt
输入：text = "ghiabcdefhelloadamhelloabcdefghi"
输出：7
解释：我们可以把字符串拆分成 "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)"。
```

示例 2：

```txt
输入：text = "merchant"
输出：1
解释：我们可以把字符串拆分成 "(merchant)"。
```

示例 3：

```txt
输入：text = "antaprezatepzapreanta"
输出：11
解释：我们可以把字符串拆分成 "(a)(nt)(a)(pre)(za)(tep)(za)(pre)(a)(nt)(a)"。
```

---

提示：

- `1 <= text.length <= 1000`
- `text` 仅由小写英文字符组成

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
