# [1604. 警告一小时内使用相同员工卡大于等于三次的人【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1604.%20%E8%AD%A6%E5%91%8A%E4%B8%80%E5%B0%8F%E6%97%B6%E5%86%85%E4%BD%BF%E7%94%A8%E7%9B%B8%E5%90%8C%E5%91%98%E5%B7%A5%E5%8D%A1%E5%A4%A7%E4%BA%8E%E7%AD%89%E4%BA%8E%E4%B8%89%E6%AC%A1%E7%9A%84%E4%BA%BA%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 哈希表 + 排序](#2--s1---哈希表--排序)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/)

力扣公司的员工都使用员工卡来开办公室的门。每当一个员工使用一次他的员工卡，安保系统会记录下员工的名字和使用时间。如果一个员工在一小时时间内使用员工卡的次数大于等于三次，这个系统会自动发布一个 警告。

给你字符串数组 `keyName` 和 `keyTime` ，其中 `[keyName[i], keyTime[i]]` 对应一个人的名字和他在 某一天 内使用员工卡的时间。

使用时间的格式是 24 小时制 ，形如 "HH:MM" ，比方说 `"23:51"` 和 `"09:49"`。

请你返回去重后的收到系统警告的员工名字，将它们按 字典序升序 排序后返回。

请注意 `"10:00"` - `"11:00"` 视为一个小时时间范围内，而 `"22:51"` - `"23:52"` 不被视为一小时时间范围内。

---

示例 1：

```txt
输入：keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"], keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
输出：["daniel"]
解释："daniel" 在一小时内使用了 3 次员工卡（"10:00"，"10:40"，"11:00"）。
```

示例 2：

```txt
输入：keyName = ["alice","alice","alice","bob","bob","bob","bob"], keyTime = ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"]
输出：["bob"]
解释："bob" 在一小时内使用了 3 次员工卡（"21:00"，"21:20"，"21:30"）。
```

---

提示：

- `1 <= keyName.length, keyTime.length <= 10^5`
- `keyName.length == keyTime.length`
- `keyTime` 格式为 "HH:MM"。
- 保证 `[keyName[i], keyTime[i]]` 形成的二元对 互不相同。
- `1 <= keyName[i].length <= 10`
- `keyName[i]` 只包含小写英文字母。

## 2. 🎯 s.1 - 哈希表 + 排序

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N \log N)$，其中 N 是记录总数，主要消耗在对每个员工的时间排序
- 空间复杂度：$O(N)$，哈希表存储所有记录

算法思路：

- 使用哈希表按员工姓名分组，将时间转换为分钟数存储
- 对每个员工的刷卡时间进行排序
- 使用滑动窗口检查是否存在连续 3 次刷卡时间差不超过 60 分钟
- 将触发警告的员工名字按字典序排序后返回
