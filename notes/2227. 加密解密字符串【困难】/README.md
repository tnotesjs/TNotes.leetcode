# [2227. 加密解密字符串【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2227.%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🫧 评价](#2--评价)
- [3. 🎯 s.1 - 解法 1](#3--s1---解法-1)
- [4. 🎯 s.2 - 解法 2](#4--s2---解法-2)
- [5. 🎯 s.3 - 解法 3](#5--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/encrypt-and-decrypt-strings/)

给你一个字符数组 `keys` ，由若干 **互不相同** 的字符组成。还有一个字符串数组 `values` ，内含若干长度为 2 的字符串。另给你一个字符串数组 `dictionary` ，包含解密后所有允许的原字符串。请你设计并实现一个支持加密及解密下标从 **0** 开始字符串的数据结构。

字符串 **加密** 按下述步骤进行：

1. 对字符串中的每个字符 `c` ，先从 `keys` 中找出满足 `keys[i] == c` 的下标 `i` 。
2. 在字符串中，用 `values[i]` 替换字符 `c` 。

请注意，如果 `keys` 中不存在字符串中的字符，则无法执行加密过程，返回空字符串 `""`。

字符串 **解密** 按下述步骤进行：

1. 将字符串每相邻 2 个字符划分为一个子字符串，对于每个子字符串 `s` ，找出满足 `values[i] == s` 的一个下标 `i` 。如果存在多个有效的 `i` ，从中选择 **任意** 一个。这意味着一个字符串解密可能得到多个解密字符串。
2. 在字符串中，用 `keys[i]` 替换 `s` 。

实现 `Encrypter` 类：

- `Encrypter(char[] keys, String[] values, String[] dictionary)` 用 `keys`、`values` 和 `dictionary` 初始化 `Encrypter` 类。
- `String encrypt(String word1)` 按上述加密过程完成对 `word1` 的加密，并返回加密后的字符串。
- `int decrypt(String word2)` 统计并返回可以由 `word2` 解密得到且出现在 `dictionary` 中的字符串数目。

- **示例：**

```txt
输入：
["Encrypter", "encrypt", "decrypt"]
[
  [
    ["a", "b", "c", "d"],
    ["ei", "zf", "ei", "am"],
    ["abcd", "acbd", "adbc", "badc", "dacb", "cadb", "cbda", "abad"]
  ],
  ["abcd"],
  ["eizfeiam"]
]

输出：
[null, "eizfeiam", 2]

解释：
Encrypter encrypter = new Encrypter([
  ["a", "b", "c", "d"],
  ["ei", "zf", "ei", "am"],
  ["abcd", "acbd", "adbc", "badc", "dacb", "cadb", "cbda", "abad"]
]);
encrypter.encrypt("abcd"); // 返回 "eizfeiam"。
                           // 'a' 映射为 "ei"，'b' 映射为 "zf"，'c' 映射为 "ei"，'d' 映射为 "am"。
encrypter.decrypt("eizfeiam"); // return 2.
                              // "ei" 可以映射为 'a' 或 'c'，"zf" 映射为 'b'，"am" 映射为 'd'。
                              // 因此，解密后可以得到的字符串是 "abad"，"cbad"，"abcd" 和 "cbcd"。
                              // 其中 2 个字符串，"abad" 和 "abcd"，在 dictionary 中出现，所以答案是 2 。
```

---

**提示：**

- `1 <= keys.length == values.length <= 26`
- `values[i].length == 2`
- `1 <= dictionary.length <= 100`
- `1 <= dictionary[i].length <= 100`
- 所有 `keys[i]` 和 `dictionary[i]` **互不相同**
- `1 <= word1.length <= 2000`
- `1 <= word2.length <= 200`
- 所有 `word1[i]` 都出现在 `keys` 中
- `word2.length` 是偶数
- `keys`、`values[i]`、`dictionary[i]`、`word1` 和 `word2` 只含小写英文字母
- 至多调用 `encrypt` 和 `decrypt` **总计** `200` 次

## 2. 🫧 评价

- ⏰ TODO：
  - 提一下反馈：
  - ![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-11-27-49.png)

## 3. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 5. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
