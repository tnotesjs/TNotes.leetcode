# [3475. DNA 模式识别【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3475.%20DNA%20%E6%A8%A1%E5%BC%8F%E8%AF%86%E5%88%AB%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/dna-pattern-recognition/)

表：`Samples`

```txt
+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| sample_id      | int     |
| dna_sequence   | varchar |
| species        | varchar |
+----------------+---------+
sample_id 是这张表的唯一主键。
每一行包含一个 DNA 序列以一个字符（A，T，G，C）组成的字符串表示以及它所采集自的物种。
```

生物学家正在研究 DNA 序列中的基本模式。编写一个解决方案以识别具有以下模式的 `sample_id`：

- 以 **ATG** **开头** 的序列（一个常见的 **起始密码子**）
- 以 **TAA**，**TAG** 或 **TGA** **结尾** 的序列（终止密码子）
- 包含基序 **ATAT** 的序列（一个简单重复模式）
- 有 **至少** `3` **个连续** **G** 的序列（如 **GGG** 或 **GGGG**）

返回结果表以 sample_id **升序** 排序*。*

结果格式如下所示。

**示例：**

**输入：**

Samples 表：

```txt
+-----------+------------------+-----------+
| sample_id | dna_sequence     | species   |
+-----------+------------------+-----------+
| 1         | ATGCTAGCTAGCTAA  | Human     |
| 2         | GGGTCAATCATC     | Human     |
| 3         | ATATATCGTAGCTA   | Human     |
| 4         | ATGGGGTCATCATAA  | Mouse     |
| 5         | TCAGTCAGTCAG     | Mouse     |
| 6         | ATATCGCGCTAG     | Zebrafish |
| 7         | CGTATGCGTCGTA    | Zebrafish |
+-----------+------------------+-----------+
```

**输出：**

```txt
+-----------+------------------+-------------+-------------+------------+------------+------------+
| sample_id | dna_sequence     | species     | has_start   | has_stop   | has_atat   | has_ggg    |
+-----------+------------------+-------------+-------------+------------+------------+------------+
| 1         | ATGCTAGCTAGCTAA  | Human       | 1           | 1          | 0          | 0          |
| 2         | GGGTCAATCATC     | Human       | 0           | 0          | 0          | 1          |
| 3         | ATATATCGTAGCTA   | Human       | 0           | 0          | 1          | 0          |
| 4         | ATGGGGTCATCATAA  | Mouse       | 1           | 1          | 0          | 1          |
| 5         | TCAGTCAGTCAG     | Mouse       | 0           | 0          | 0          | 0          |
| 6         | ATATCGCGCTAG     | Zebrafish   | 0           | 1          | 1          | 0          |
| 7         | CGTATGCGTCGTA    | Zebrafish   | 0           | 0          | 0          | 0          |
+-----------+------------------+-------------+-------------+------------+------------+------------+
```

**解释：**

- 样本 1（ATGCTAGCTAGCTAA）：
  - 以 ATG 开头（has_start = 1）
  - 以 TAA 结尾（has_stop = 1）
  - 不包含 ATAT（has_atat = 0）
  - 不包含至少 3 个连续 ‘G’（has_ggg = 0）
- 样本 2（GGGTCAATCATC）：
  - 不以 ATG 开头（has_start = 0）
  - 不以 TAA，TAG 或 TGA 结尾（has_stop = 0）
  - 不包含 ATAT（has_atat = 0）
  - 包含 GGG（has_ggg = 1）
- 样本 3（ATATATCGTAGCTA）：
  - 不以 ATG 开头（has_start = 0）
  - 不以 TAA，TAG 或 TGA 结尾（has_stop = 0）
  - 包含 ATAT（has_atat = 1）
  - 不包含至少 3 个连续 ‘G’（has_ggg = 0）
- 样本 4（ATGGGGTCATCATAA）：
  - 以 ATG 开头（has_start = 1）
  - 以 TAA 结尾（has_stop = 1）
  - 不包含 ATAT（has_atat = 0）
  - 包含 GGGG（has_ggg = 1）
- 样本 5（TCAGTCAGTCAG）：
  - 不匹配任何模式（所有字段 = 0）
- 样本 6（ATATCGCGCTAG）：
  - 不以 ATG 开头（has_start = 0）
  - 以 TAG 结尾（has_stop = 1）
  - 包含 ATAT（has_atat = 1）
  - 不包含至少 3 个连续 ‘G’（has_ggg = 0）
- 样本 7（CGTATGCGTCGTA）：
  - 不以 ATG 开头（has_start = 0）
  - 不以 TAA，TAG 或 TGA 结尾（has_stop = 0）
  - 不包含 ATAT（has_atat = 0）
  - 不包含至少 3 个连续 ‘G’（has_ggg = 0）

**注意：**

- 结果以 sample_id 升序排序
- 对于每个模式，1 表示该模式存在，0 表示不存在

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
