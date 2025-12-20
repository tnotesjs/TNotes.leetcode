# [1233. 删除子文件夹【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1233.%20%E5%88%A0%E9%99%A4%E5%AD%90%E6%96%87%E4%BB%B6%E5%A4%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/remove-sub-folders-from-the-filesystem/)

你是一位系统管理员，手里有一份文件夹列表 `folder`，你的任务是要删除该列表中的所有 子文件夹，并以 任意顺序 返回剩下的文件夹。

如果文件夹 `folder[i]` 位于另一个文件夹 `folder[j]` 下，那么 `folder[i]` 就是 `folder[j]` 的 子文件夹 。`folder[j]` 的子文件夹必须以 `folder[j]` 开头，后跟一个 `"/"`。例如，`"/a/b"` 是 `"/a"` 的一个子文件夹，但 `"/b"` 不是 `"/a/b/c"` 的一个子文件夹。

文件夹的「路径」是由一个或多个按以下格式串联形成的字符串：'/' 后跟一个或者多个小写英文字母。

- 例如，`"/leetcode"` 和 `"/leetcode/problems"` 都是有效的路径，而空字符串和 `"/"` 不是。

---

- 示例 1：

```txt
输入：folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
输出：["/a","/c/d","/c/f"]
解释："/a/b" 是 "/a" 的子文件夹，而 "/c/d/e" 是 "/c/d" 的子文件夹。
```

- 示例 2：

```txt
输入：folder = ["/a","/a/b/c","/a/b/d"]
输出：["/a"]
解释：文件夹 "/a/b/c" 和 "/a/b/d" 都会被删除，因为它们都是 "/a" 的子文件夹。
```

- 示例 3：

```txt
输入: folder = ["/a/b/c","/a/b/ca","/a/b/d"]
输出: ["/a/b/c","/a/b/ca","/a/b/d"]
```

---

提示：

- `1 <= folder.length <= 4 * 10^4`
- `2 <= folder[i].length <= 100`
- `folder[i]` 只包含小写字母和 `'/'`
- `folder[i]` 总是以字符 `'/'` 起始
- `folder` 每个元素都是 唯一 的

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
