class Solution:
    def maximumSum(self, nums: list[int]) -> int:
        n = len(nums)
        ans = 0
        for c in range(1, n + 1):
            s = 0
            j = 1
            while c * j * j <= n:
                s += nums[c * j * j - 1]
                j += 1
            ans = max(ans, s)
        return ans
