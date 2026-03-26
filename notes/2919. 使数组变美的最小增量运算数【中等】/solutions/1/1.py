class Solution:
    def minIncrementOperations(self, nums: list[int], k: int) -> int:
        f0 = max(0, k - nums[0])
        f1 = max(0, k - nums[1])
        f2 = max(0, k - nums[2])
        for i in range(3, len(nums)):
            cost = max(0, k - nums[i])
            f0, f1, f2 = f1, f2, cost + min(f0, f1, f2)
        return min(f0, f1, f2)
