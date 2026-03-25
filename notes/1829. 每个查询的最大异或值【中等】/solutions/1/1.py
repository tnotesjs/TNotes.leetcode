class Solution:
    def getMaximumXor(self, nums: list[int], maximumBit: int) -> list[int]:
        mask = (1 << maximumBit) - 1
        xor_val = 0
        for x in nums:
            xor_val ^= x
        ans = []
        for i in range(len(nums) - 1, -1, -1):
            ans.append(xor_val ^ mask)
            xor_val ^= nums[i]
        return ans
