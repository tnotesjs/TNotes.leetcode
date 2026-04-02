# [1487. 保证文件名唯一【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1487.%20%E4%BF%9D%E8%AF%81%E6%96%87%E4%BB%B6%E5%90%8D%E5%94%AF%E4%B8%80%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 哈希表](#2--s1---哈希表)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/making-file-names-unique/)

给你一个长度为 `n` 的字符串数组 `names`。你将会在文件系统中创建 `n` 个文件夹：在第 `i` 分钟，新建名为 `names[i]` 的文件夹。

由于两个文件 不能 共享相同的文件名，因此如果新建文件夹使用的文件名已经被占用，系统会以 `(k)` 的形式为新文件夹的文件名添加后缀，其中 `k` 是能保证文件名唯一的 最小正整数。

返回长度为 _`n`_ 的字符串数组，其中 `ans[i]` 是创建第 `i` 个文件夹时系统分配给该文件夹的实际名称。

---

示例 1：

```txt
输入：names = ["pes","fifa","gta","pes(2019)"]
输出：["pes","fifa","gta","pes(2019)"]
解释：文件系统将会这样创建文件名：
"pes" --> 之前未分配，仍为 "pes"
"fifa" --> 之前未分配，仍为 "fifa"
"gta" --> 之前未分配，仍为 "gta"
"pes(2019)" --> 之前未分配，仍为 "pes(2019)"
```

示例 2：

```txt
输入：names = ["gta","gta(1)","gta","avalon"]
输出：["gta","gta(1)","gta(2)","avalon"]
解释：文件系统将会这样创建文件名：
"gta" --> 之前未分配，仍为 "gta"
"gta(1)" --> 之前未分配，仍为 "gta(1)"
"gta" --> 文件名被占用，系统为该名称添加后缀 (k)，由于 "gta(1)" 也被占用，所以 k = 2。实际创建的文件名为 "gta(2)"。
"avalon" --> 之前未分配，仍为 "avalon"
```

示例 3：

```txt
输入：names = ["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece"]
输出：["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece(4)"]
解释：当创建最后一个文件夹时，最小的正有效 k 为 4，文件名变为 "onepiece(4)"。
```

示例 4：

```txt
输入：names = ["wano","wano","wano","wano"]
输出：["wano","wano(1)","wano(2)","wano(3)"]
解释：每次创建文件夹 "wano" 时，只需增加后缀中 k 的值即可。
```

示例 5：

```txt
输入：names = ["kaido","kaido(1)","kaido","kaido(1)"]
输出：["kaido","kaido(1)","kaido(2)","kaido(1)(1)"]
解释：注意，如果含后缀文件名被占用，那么系统也会按规则在名称后添加新的后缀 (k)。
```

---

提示：

- `1 <= names.length <= 5 * 10^4`
- `1 <= names[i].length <= 20`
- `names[i]` 由小写英文字母、数字和/或圆括号组成。

## 2. 🎯 s.1 - 哈希表

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，平均情况下每个文件名 $O(1)$ 处理
- 空间复杂度：$O(n)$，哈希表存储所有文件名

算法思路：

- 用哈希表记录每个文件名的下一个可用后缀编号
- 若文件名未被使用，直接使用并记录
- 若已被使用，从记录的编号开始递增查找可用的 `name(k)` 形式
