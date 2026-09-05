# [0211. 添加与搜索单词 - 数据结构设计【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0211.%20%E6%B7%BB%E5%8A%A0%E4%B8%8E%E6%90%9C%E7%B4%A2%E5%8D%95%E8%AF%8D%20-%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E8%AE%BE%E8%AE%A1%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 字典树 + DFS](#2-s1---字典树--dfs)
- [3. 【AI】解释 `s.1`](#3-ai解释-s1)
  - [3.1. 节点长什么样](#31-节点长什么样)
  - [3.2. `addWord`：普通 Trie 插入](#32-addword普通-trie-插入)
  - [3.3. `search`：为什么要 DFS](#33-search为什么要-dfs)
  - [3.4. 和 0208 Trie 的差别](#34-和-0208-trie-的差别)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/design-add-and-search-words-data-structure/)

请你设计一个数据结构，支持添加新单词和查找字符串是否与任何先前添加的字符串匹配。

实现词典类 `WordDictionary`：

- `WordDictionary()` 初始化词典对象
- `void addWord(word)` 将 `word` 添加到数据结构中，之后可以对它进行匹配
- `bool search(word)` 如果数据结构中存在字符串与 `word` 匹配，则返回 `true`；否则，返回 `false`。`word` 中可能包含一些 `'.'`，每个 `.` 都可以表示任何一个字母。

---

示例：

```txt
输入：
["WordDictionary", "addWord", "addWord", "addWord", "search", "search", "search", "search"]
[[], ["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."]]

输出：
[null, null, null, null, false, true, true, true]

解释：
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // 返回 False
wordDictionary.search("bad"); // 返回 True
wordDictionary.search(".ad"); // 返回 True
wordDictionary.search("b.."); // 返回 True
```

---

提示：

- `1 <= word.length <= 25`
- `addWord` 中的 `word` 由小写英文字母组成
- `search` 中的 `word` 由 '.' 或小写英文字母组成
- 最多调用 `10^4` 次 `addWord` 和 `search`

## 2. s.1 - 字典树 + DFS

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：`addWord` 为 $O(m)$，`search` 最坏 $O(26^m)$，其中 $m$ 是单词长度
- 空间复杂度：$O(T)$，其中 $T$ 是所有插入单词的字符总数

算法思路：

- 使用字典树存储单词，`addWord` 与普通 Trie 插入相同
- `search` 时遇到 `.` 需要遍历当前节点的所有子节点（枚举 `children`）进行 DFS 匹配，任一分支成功就返回 `true`
- `dfs(node, i)` 表示已经匹配到 `word[0..i)`，现在站在 `node` 上，要匹配 `word[i..]`

## 3. 【AI】解释 `s.1`

这是 **Trie（前缀树）+ 带通配符的 DFS 搜索**。关键点是：每个 `WordDictionary` 实例本身就是一个树节点。

### 3.1. 节点长什么样

```js
this.children = {} // 字母 -> 子节点
this.isEnd = false // 是否有单词在这里结束
```

插入 `bad` / `dad` / `mad` 后大致是：

```text
root
├─ b → a → d (isEnd)
├─ d → a → d (isEnd)
└─ m → a → d (isEnd)
```

子节点也是 `new WordDictionary()`，所以整棵树是同一类对象拼出来的，不必再写单独的 `TrieNode`。

### 3.2. `addWord`：普通 Trie 插入

从根一路往下走，缺边就新建节点，最后一个字符把 `isEnd = true`。

### 3.3. `search`：为什么要 DFS

普通字母：只能走固定那条边，递归下一步。

遇到 `.`：当前层**所有子节点都可能对**，所以要枚举 `children`，任一分支成功就返回 `true`。

`dfs(node, i)` 含义：已经匹配到 `word[0..i)`，现在站在 `node` 上，要匹配 `word[i..]`。

- `i === word.length`：整串走完，看 `node.isEnd`（必须是完整单词，不能只是前缀）
- `word[i] === '.'`：遍历所有孩子 `dfs(child, i+1)`
- 否则：没有对应边就失败；有就 `dfs(node.children[ch], i+1)`

例如搜 `.ad`：根下 `b/d/m` 都会试；走 `b` 后还要匹配 `ad`，能走到 `isEnd` 就成功。

### 3.4. 和 0208 Trie 的差别

0208 的 `search` 路径唯一；这里多了 `.`，所以从「单路」变成「可能多路 DFS」。
