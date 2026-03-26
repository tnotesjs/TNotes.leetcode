class Solution:
    def countWays(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)
        ans = (1 if nums[0] > 0 else 0) + 1
        for s in range(1, n):
            if nums[s - 1] < s and nums[s] > s:
                ans += 1
        return ans
