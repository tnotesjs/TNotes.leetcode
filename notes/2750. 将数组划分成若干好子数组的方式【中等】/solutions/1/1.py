class Solution:
    def numberOfGoodSubarraySplits(self, nums: list[int]) -> int:
        MOD = 10 ** 9 + 7
        prev = -1
        res = 1
        found = False
        for i, v in enumerate(nums):
            if v == 1:
                if found:
                    res = res * (i - prev) % MOD
                prev = i
                found = True
        return res if found else 0
