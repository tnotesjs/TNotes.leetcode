class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # 第一步：构建哈希表
        map = {}
        for i, num in enumerate(nums):
            map[num] = i

        # 第二步：查询哈希表
        for i, num in enumerate(nums):
            another = target - num
            if another in map and map[another] != i:
                return [i, map[another]]
