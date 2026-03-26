class Solution:
    def maxSubarrays(self, nums: list[int]) -> int:
        cnt = 0
        cur = -1
        for x in nums:
            cur &= x
            if cur == 0:
                cnt += 1
                cur = -1
        return max(1, cnt)
