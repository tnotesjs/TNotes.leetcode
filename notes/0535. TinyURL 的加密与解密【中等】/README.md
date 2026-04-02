# [0535. TinyURL 的加密与解密【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0535.%20TinyURL%20%E7%9A%84%E5%8A%A0%E5%AF%86%E4%B8%8E%E8%A7%A3%E5%AF%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 自增 ID + 哈希表](#2--s1---自增-id--哈希表)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/encode-and-decode-tinyurl/)

TinyURL 是一种 URL 简化服务， 比如：当你输入一个 URL `https://leetcode.com/problems/design-tinyurl` 时，它将返回一个简化的 URL `http://tinyurl.com/4e9iAk`。请你设计一个类来加密与解密 TinyURL。

加密和解密算法如何设计和运作是没有限制的，你只需要保证一个 URL 可以被加密成一个 TinyURL，并且这个 TinyURL 可以用解密方法恢复成原本的 URL。

实现 `Solution` 类：

- `Solution()` 初始化 TinyURL 系统对象。
- `String encode(String longUrl)` 返回 `longUrl` 对应的 TinyURL。
- `String decode(String shortUrl)` 返回 `shortUrl` 原本的 URL。题目数据保证给定的 `shortUrl` 是由同一个系统对象加密的。

示例：

```txt
输入：url = "https://leetcode.com/problems/design-tinyurl"
输出："https://leetcode.com/problems/design-tinyurl"

解释：
Solution obj = new Solution();
string tiny = obj.encode(url); // 返回加密后得到的 TinyURL。
string ans = obj.decode(tiny); // 返回解密后得到的原本的 URL。
```

---

提示：

- `1 <= url.length <= 10^4`
- 题目数据保证 `url` 是一个有效的 URL

## 2. 🎯 s.1 - 自增 ID + 哈希表

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：`encode` 和 `decode` 均为 $O(1)$
- 空间复杂度：$O(n)$，$n$ 为已编码 URL 数量

算法思路：

- 为每个 URL 分配自增 ID，作为短链接后缀
- 哈希表存储短链接到原始 URL 的映射
