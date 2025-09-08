# [1160. 拼写单词【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1160.%20%E6%8B%BC%E5%86%99%E5%8D%95%E8%AF%8D%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/find-words-that-can-be-formed-by-characters)

给定一个字符串数组  `words`  和一个字符串 `chars`。

如果字符串可以由 `chars` 中的字符组成（每个字符在 **每个** `words` 中只能使用一次），则认为它是好的。

返回  `words`  中所有好的字符串的长度之和。

---

- **示例 1：**

```txt
输入：words = ["cat","bt","hat","tree"], chars = "atach"
输出：6
解释：
可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
```

- **示例 2：**

```txt
输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
输出：10
解释：
可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。
```

---

**提示：**

- `1 <= words.length <= 1000`
- `1 <= words[i].length, chars.length <= 100`
- `words[i]`  和  `chars` 中都仅包含小写英文字母

:::

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js（array）]

<<< ./solutions/1/2.js [js（map）]

:::

- 使用数组需要固定 26 个位置，我们可以使用 Map 来优化，只存储实际出现的字符。这样在字符种类较少时可以节省空间。
- 两种方案对比

| 方案     | 优点                 | 缺点                             |
| -------- | -------------------- | -------------------------------- |
| 数组方案 | 访问速度快 `(O(1))`  | 始终占用 26 个位置的空间         |
|          | 内存占用固定且可预测 | 即使只需要几个字符也分配全部空间 |
| Map 方案 | 只存储实际出现的字符 | 访问速度略慢                     |
|          | 空间使用更灵活       | 需要处理键不存在的情况           |

- 实际应用性能分析
  1. **当字符集较小时**（比如只用到几种字符），Map 方案更节省空间
  2. **当字符集接近 26 个字母时**，数组方案更优，因为：
     - 访问速度更快
     - 不需要处理哈希冲突
     - 内存局部性更好
  3. **在 LeetCode 测试环境下**，由于测试用例通常涵盖大部分字母，数组方案通常表现更好
- 小结：
  - 如果追求 **空间效率** 且字符集稀疏，使用 Map 更好。
  - 如果追求 **时间效率** 且字符集较全，使用数组更好。
