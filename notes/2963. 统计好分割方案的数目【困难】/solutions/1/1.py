class Solution:
    def numberOfGoodPartitions(self, nums: list[int]) -> int:
        MOD = 10 ** 9 + 7
        last = {}
        for i, x in enumerate(nums):
            last[x] = i
        segments = max_right = 0
        for i, x in enumerate(nums):
            if i > max_right:
                segments += 1
            max_right = max(max_right, last[x])
        return pow(2, segments - 1, MOD)
