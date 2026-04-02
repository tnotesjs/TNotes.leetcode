# [0811. 子域名访问计数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0811.%20%E5%AD%90%E5%9F%9F%E5%90%8D%E8%AE%BF%E9%97%AE%E8%AE%A1%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 哈希表](#2--s1---哈希表)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/subdomain-visit-count/)

网站域名 `"discuss.leetcode.com"` 由多个子域名组成。顶级域名为 `"com"`，二级域名为 `"leetcode.com"`，最低一级为 `"discuss.leetcode.com"`。当访问域名 `"discuss.leetcode.com"` 时，同时也会隐式访问其父域名 `"leetcode.com"` 以及 `"com"`。

计数配对域名 是遵循 `"rep d1.d2.d3"` 或 `"rep d1.d2"` 格式的一个域名表示，其中 `rep` 表示访问域名的次数，`d1.d2.d3` 为域名本身。

- 例如，`"9001 discuss.leetcode.com"` 就是一个 计数配对域名，表示 `discuss.leetcode.com` 被访问了 `9001` 次。

给你一个 计数配对域名 组成的数组 `cpdomains`，解析得到输入中每个子域名对应的 计数配对域名，并以数组形式返回。可以按 任意顺序 返回答案。

---

示例 1：

```txt
输入：cpdomains = ["9001 discuss.leetcode.com"]
输出：["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
解释：例子中仅包含一个网站域名："discuss.leetcode.com"。
按照前文描述，子域名 "leetcode.com" 和 "com" 都会被访问，所以它们都被访问了 9001 次。
```

示例 2：

```txt
输入：cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
输出：["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
解释：按照前文描述，会访问 "google.mail.com" 900 次，"yahoo.com" 50 次，"intel.mail.com" 1 次，"wiki.org" 5 次。
而对于父域名，会访问 "mail.com" 900 + 1 = 901 次，"com" 900 + 50 + 1 = 951 次，和 "org" 5 次。
```

---

提示：

- `1 <= cpdomain.length <= 100`
- `1 <= cpdomain[i].length <= 100`
- `cpdomain[i]` 会遵循 `"repi d1i.d2i.d3i"` 或 `"repi d1i.d2i"` 格式
- `repi` 是范围 `[1, 10^4]` 内的一个整数
- `d1i`、`d2i` 和 `d3i` 由小写英文字母组成

## 2. 🎯 s.1 - 哈希表

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \times m)$，其中 n 是域名数，m 是子域名平均层数
- 空间复杂度：$O(n \times m)$

算法思路：

- 对每个域名，拆分出所有子域名并累加访问次数到哈希表中
