# [0026. 删除有序数组中的重复项【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0026.%20%E5%88%A0%E9%99%A4%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B9%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [📂 TNotes.yuque](https://www.yuque.com/tdahuyou/tnotes.yuque/)
  - [TNotes.yuque.leetcode.0026](https://www.yuque.com/tdahuyou/tnotes.yuque/leetcode.0026)
- [1. 📝 Description](#1--description)
- [2. 🎯 s.1 - 快慢指针](#2--s1---快慢指针)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/remove-duplicates-from-sorted-array)

给你一个 **非严格递增排列** 的数组 `nums` ，请你 **[原地](http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)** 删除重复出现的元素，使每个元素 **只出现一次** ，返回删除后数组的新长度。元素的 **相对顺序** 应该保持 **一致** 。然后返回 `nums` 中唯一元素的个数。

考虑 `nums` 的唯一元素的数量为 `k` ，你需要做以下事情确保你的题解可以被通过：

- 更改数组 `nums` ，使 `nums` 的前 `k` 个元素包含唯一元素，并按照它们最初在 `nums` 中出现的顺序排列。`nums`  的其余元素与 `nums` 的大小不重要。
- 返回 `k` 。

**判题标准:**

系统会用下面的代码来测试你的题解:

```
int[] nums = [...]; // 输入数组
int[] expectedNums = [...]; // 长度正确的期望答案

int k = removeDuplicates(nums); // 调用

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

如果所有断言都通过，那么您的题解将被 **通过**。

**示例 1：**

```txt
输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
```

**示例 2：**

```txt
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
```

**提示：**

- `1 <= nums.length <= 3 * 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` 已按 **非严格递增**  排列

:::

## 2. 🎯 s.1 - 快慢指针

::: swiper

![1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-11-08-47-33.png)

![2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-11-08-47-43.png)

![3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-11-08-48-33.png)

![4](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-11-08-48-42.png)

![5](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-11-08-48-51.png)

![6](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-11-08-49-00.png)

:::

::: code-group

```js
/**
 * 22-08-15
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0,
    fast = 1
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) nums[++slow] = nums[fast++]
    else fast++
  }
  return slow + 1
}
```

:::

::: details

- **题解说明：**
  - 定义俩指针 `fast` `slow`，其中快指针 `fast` 不断往后探索，一旦发现 `fast` 指向的成员和 `slow` 指向的成员不等时，`slow` 指针才会往后移动，并将此时 `fast` 指针指向的值赋值给 `slow` 指向的值。直到 `fast` 遍历完整个 `nums`，最后将 `slow + 1` 返回即可。

:::
