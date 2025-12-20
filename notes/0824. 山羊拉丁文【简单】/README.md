# [0824. 山羊拉丁文【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0824.%20%E5%B1%B1%E7%BE%8A%E6%8B%89%E4%B8%81%E6%96%87%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)
- [3. 🎯 s.2 - 正则](#3--s2---正则)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/goat-latin/)

---

- 给你一个由若干单词组成的句子 `sentence` ，单词间由空格分隔。
- 每个单词仅由大写和小写英文字母组成。
- 请你将句子转换为 “山羊拉丁文（Goat Latin）”（一种类似于 猪拉丁文 - Pig Latin 的虚构语言）。
- 山羊拉丁文的规则如下：
  - 如果单词以元音开头（`'a'`, `'e'`, `'i'`, `'o'`, `'u'`），在单词后添加`"ma"`。
    - 例如，单词 `"apple"` 变为 `"applema"` 。
  - 如果单词以辅音字母开头（即，非元音字母），移除第一个字符并将它放到末尾，之后再添加`"ma"`。
    - 例如，单词 `"goat"` 变为 `"oatgma"` 。
  - 根据单词在句子中的索引，在单词最后添加与索引相同数量的字母`'a'`，索引从 `1` 开始。
    - 例如，在第一个单词后添加 `"a"` ，在第二个单词后添加 `"aa"` ，以此类推。
- 返回将 `sentence` 转换为山羊拉丁文后的句子。

---

示例 1：

- 输入：`sentence = "I speak Goat Latin"`
- 输出：`"Imaa peaksmaaa oatGmaaaa atinLmaaaaa"`

示例 2：

- 输入：`sentence = "The quick brown fox jumped over the lazy dog"`
- 输出：`"heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"`

---

提示：

- `1 <= sentence.length <= 150`
- `sentence` 由英文字母和空格组成
- `sentence` 不含前导或尾随空格
- `sentence` 中的所有单词由单个空格分隔

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [1.js]

<<< ./solutions/1/2.js [2.js]

:::

- 时间复杂度：$O(n + m)$，其中 n 是句子的总字符数，m 是单词的总个数
- 空间复杂度：$O(n)$，需要存储处理后的结果
- 解题思路：
  - 根据题目要求的“山羊拉丁文的规则”来翻译。

## 3. 🎯 s.2 - 正则

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(n + m)$，其中 n 是句子的总字符数，m 是单词的总个数
- 空间复杂度：$O(n)$，需要存储处理后的结果
- 解题思路：
  - 逻辑跟暴力解法一致，区别在于使用正则匹配元音字母。
