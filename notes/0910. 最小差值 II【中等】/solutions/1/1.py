class Solution:
    def smallestRangeII(self, nums: List[int], k: int) -> int:
        nums.sort()
        n = len(nums)
        res = nums[-1] - nums[0]
        for i in range(n - 1):
            hi = max(nums[i] + k, nums[-1] - k)
            lo = min(nums[0] + k, nums[i + 1] - k)
            res = min(res, hi - lo)
        return res
