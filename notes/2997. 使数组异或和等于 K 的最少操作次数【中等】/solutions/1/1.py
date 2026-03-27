class Solution:
    def minOperations(self, nums: list[int], k: int) -> int:
        xor = 0
        for num in nums:
            xor ^= num
        return (xor ^ k).bit_count()
