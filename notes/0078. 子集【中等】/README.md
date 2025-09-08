# [0078. 子集【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0078.%20%E5%AD%90%E9%9B%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 🔗 links](#1--links)
- [2. 📝 Description](#2--description)
- [3. 🎯 s.1 - 循环遍历](#3--s1---循环遍历)
- [4. 🎯 s.2 - 回溯](#4--s2---回溯)

<!-- endregion:toc -->

- [leetcode](https://leetcode.cn/problems/subsets/)

- **⏰ TODO**
  - 合并 keynote-2.key、keynote.key。

## 1. 🔗 links

- https://leetcode.cn/problems/subsets/solutions/420294/zi-ji-by-leetcode-solution/
  - leetcode 官方题解
- https://zhuanlan.zhihu.com/p/93530380
  - 知乎 - 回溯算法套路详解

## 2. 📝 Description

给你一个整数数组  `nums` ，数组中的元素 **互不相同** 。返回该数组所有可能的 **子集** （幂集）。

> 数组的 **子集** 是从数组中选择一些元素（可能为空）。

解集 **不能** 包含重复的子集。你可以按 **任意顺序** 返回解集。

**示例 1：**

```
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

**示例 2：**

```
输入：nums = [0]
输出：[[],[0]]
```

**提示：**

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`
- `nums` 中的所有元素 **互不相同**

## 3. 🎯 s.1 - 循环遍历

```javascript
var subsets = function (nums) {
  let ans = [[]]
  for (let i = 0; i < nums.length; i++) {
    const temps = []
    for (let k = 0; k < ans.length; k++) {
      temps.push(ans[k].slice())
    }
    // const temps = [...ans]; // 由于 js 中引用类型的值在赋值时，赋的值是地址，所以这么写不行。
    for (let j = 0; j < temps.length; j++) {
      temps[j].push(nums[i])
    }
    ans = [...ans, ...temps]
  }
  return ans
}
```

- ![](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-11-03-21-55-18.png)
  - 参考 leetcode 官方题解：https://leetcode-cn.com/problems/subsets/solution/zi-ji-by-leetcode-solution/

## 4. 🎯 s.2 - 回溯

```javascript
var subsets = function (nums) {
  const t = []
  const ans = []
  const dfs = (deep) => {
    if (deep === nums.length) {
      // console.log(t);
      ans.push([...t])
      return
    }
    t.push(nums[deep])
    dfs(deep + 1)
    t.pop()
    dfs(deep + 1)
  }
  dfs(0)
  return ans
}
```

- ![](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-11-03-21-53-54.png)
- 对于当前值，只有两种选择：「选」 | 「不选」。所以，如果 nums 的长度为 3，那么结果有 2^3，也就是 8 个。
  - 绿线：选；红线：不选；
    - 第一个 dfs 走绿线；
    - 第二个 dfs 走红线；
  - 回溯：撤销选择；
  - 结束条件：到底层，即 deep 等于 nums.length，此时记录结果；
- 套路 - 回溯算法需要关注的核心有 3 个点：
  - 路径：已做的选择；`t`
  - 选择列表：可选项；`nums[deep]`
  - 结束条件：到底层，不用继续做选择；`deep === nums.length`
- 回溯的意思就是指撤销我们做的选择，让我们重新选。
  - https://zhuanlan.zhihu.com/p/93530380
  - 详细内容知乎上的这篇参考文章：《回溯算法套路详解》。
- ![](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-11-03-22-00-13.png)
- ![](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-11-03-22-00-16.png)
