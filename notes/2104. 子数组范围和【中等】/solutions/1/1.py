class Solution:
    def subArrayRanges(self, nums: List[int]) -> int:
        n = len(nums)
        res = 0
        for i in range(n):
            mn = mx = nums[i]
            for j in range(i + 1, n):
                mn = min(mn, nums[j])
                mx = max(mx, nums[j])
                res += mx - mn
        return res
