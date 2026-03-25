class Solution:
    def minOperations(self, nums: list[int]) -> int:
        ops = max_bits = 0
        for x in nums:
            bits = 0
            v = x
            while v > 0:
                if v & 1:
                    ops += 1
                bits += 1
                v >>= 1
            max_bits = max(max_bits, bits)
        if max_bits > 0:
            ops += max_bits - 1
        return ops
