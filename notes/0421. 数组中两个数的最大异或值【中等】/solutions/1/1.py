class Solution:
    def findMaximumXOR(self, nums: List[int]) -> int:
        max_xor, mask = 0, 0
        for i in range(31, -1, -1):
            mask |= (1 << i)
            prefixes = {num & mask for num in nums}
            candidate = max_xor | (1 << i)
            if any(prefix ^ candidate in prefixes for prefix in prefixes):
                max_xor = candidate
        return max_xor
