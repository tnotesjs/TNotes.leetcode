class Solution:
    def maximumUniqueSubarray(self, nums: list[int]) -> int:
        seen = set()
        l = 0
        total = 0
        res = 0
        for x in nums:
            while x in seen:
                seen.discard(nums[l])
                total -= nums[l]
                l += 1
            seen.add(x)
            total += x
            res = max(res, total)
        return res
