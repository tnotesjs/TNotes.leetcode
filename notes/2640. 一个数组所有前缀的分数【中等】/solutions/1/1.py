class Solution:
    def findPrefixScore(self, nums: list[int]) -> list[int]:
        n = len(nums)
        ans = [0] * n
        max_val = 0
        score = 0
        for i in range(n):
            max_val = max(max_val, nums[i])
            score += nums[i] + max_val
            ans[i] = score
        return ans
