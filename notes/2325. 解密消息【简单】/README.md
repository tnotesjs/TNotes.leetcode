# [2325. 解密消息【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2325.%20%E8%A7%A3%E5%AF%86%E6%B6%88%E6%81%AF%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/decode-the-message/)

给你字符串 `key` 和 `message` ，分别表示一个加密密钥和一段加密消息。解密 `message` 的步骤如下：

1. 使用 `key` 中 26 个英文小写字母第一次出现的顺序作为替换表中的字母 **顺序** 。
2. 将替换表与普通英文字母表对齐，形成对照表。
3. 按照对照表 **替换** `message` 中的每个字母。
4. 空格 `' '` 保持不变。

- 例如，`key = "***hap***p***y*** ***bo***y"`（实际的加密密钥会包含字母表中每个字母 **至少一次**），据此，可以得到部分对照表（`'h' -> 'a'`、`'a' -> 'b'`、`'p' -> 'c'`、`'y' -> 'd'`、`'b' -> 'e'`、`'o' -> 'f'`）。

返回解密后的消息。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-13-30-46.png)

```txt
输入：key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
输出："this is a secret"
解释：对照表如上图所示。
提取 "the quick brown fox jumps over the lazy dog" 中每个字母的首次出现可以得到替换表。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-13-30-52.png)

```txt
输入：key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
输出："the five boxing wizards jump quickly"
解释：对照表如上图所示。
提取 "eljuxhpwnyrdgtqkviszcfmabo" 中每个字母的首次出现可以得到替换表。
```

---

**提示：**

- `26 <= key.length <= 2000`
- `key` 由小写英文字母及 `' '` 组成
- `key` 包含英文字母表中每个字符（`'a'` 到 `'z'`）**至少一次**
- `1 <= message.length <= 2000`
- `message` 由小写英文字母和 `' '` 组成

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
