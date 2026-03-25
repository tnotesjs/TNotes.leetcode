class Solution:
    def minSubarray(self, nums: list[int], p: int) -> int:
        total = sum(nums) % p
        if total == 0:
            return 0
        prefix_map = {0: -1}
        prefix = 0
        res = len(nums)
        for i, x in enumerate(nums):
            prefix = (prefix + x) % p
            need = (prefix - total) % p
            if need in prefix_map:
                res = min(res, i - prefix_map[need])
            prefix_map[prefix] = i
        return -1 if res >= len(nums) else res
