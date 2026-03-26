class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        f = [0, 0, 0]
        for x in nums:
            if x == 1:
                f[0] += 1
            elif x == 2:
                f[1] = max(f[0], f[1]) + 1
            else:
                f[2] = max(f[0], f[1], f[2]) + 1
        return len(nums) - max(f)
