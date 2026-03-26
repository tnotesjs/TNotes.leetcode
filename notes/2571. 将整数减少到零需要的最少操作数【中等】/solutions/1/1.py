class Solution:
    def minOperations(self, n: int) -> int:
        ops = 0
        while n:
            lb = n & -n
            if n & (lb << 1):
                n += lb
            else:
                n -= lb
            ops += 1
        return ops
