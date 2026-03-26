class Solution:
    def smallestSubarrays(self, nums: list[int]) -> list[int]:
        n = len(nums)
        ans = [0] * n
        last_bit = [0] * 30
        for i in range(n - 1, -1, -1):
            for b in range(30):
                if nums[i] & (1 << b):
                    last_bit[b] = i
            farthest = max(i, max(last_bit))
            ans[i] = farthest - i + 1
        return ans
