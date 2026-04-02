# [1146. 快照数组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1146.%20%E5%BF%AB%E7%85%A7%E6%95%B0%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 二分查找](#2--s1---二分查找)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/snapshot-array/)

实现支持下列接口的「快照数组」- SnapshotArray：

- `SnapshotArray(int length)` - 初始化一个与指定长度相等的 类数组 的数据结构。初始时，每个元素都等于 0。
- `void set(index, val)` - 会将指定索引 `index` 处的元素设置为 `val`。
- `int snap()` - 获取该数组的快照，并返回快照的编号 `snap_id`（快照号是调用 `snap()` 的总次数减去 `1`）。
- `int get(index, snap_id)` - 根据指定的 `snap_id` 选择快照，并返回该快照指定索引 `index` 的值。

示例：

```txt
输入：["SnapshotArray","set","snap","set","get"]
     [[3],[0,5],[],[0,6],[0,0]]
输出：[null,null,0,null,5]
解释：
SnapshotArray snapshotArr = new SnapshotArray(3); // 初始化一个长度为 3 的快照数组
snapshotArr.set(0,5);  // 令 array[0] = 5
snapshotArr.snap();  // 获取快照，返回 snap_id = 0
snapshotArr.set(0,6);
snapshotArr.get(0,0);  // 获取 snap_id = 0 的快照中 array[0] 的值，返回 5
```

---

提示：

- `1 <= length <= 50000`
- 题目最多进行`50000` 次`set`，`snap`，和 `get`的调用。
- `0 <= index < length`
- `0 <= snap_id <` 我们调用 `snap()` 的总次数
- `0 <= val <= 10^9`

## 2. 🎯 s.1 - 二分查找

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：`set` 和 `snap` 为 $O(1)$，`get` 为 $O(\log S)$，其中 $S$ 是对该索引的 set 操作次数
- 空间复杂度：$O(n + Q)$，其中 $n$ 是数组长度，$Q$ 是 set 操作总次数

算法思路：

- 对每个索引维护一个有序列表，记录 `[snap_id, val]` 对
- `set` 操作：如果当前快照已有记录则更新，否则追加新记录
- `snap` 操作：递增快照计数器并返回当前快照 ID
- `get` 操作：在对应索引的有序列表中二分查找最后一个 `snap_id ≤ 目标snap_id` 的记录
