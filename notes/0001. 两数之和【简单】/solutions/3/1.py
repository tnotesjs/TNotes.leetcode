class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for i, item in enumerate(nums):
            another = target - item
            if another in map:
                return [i, map[another]]
            map[item] = i
