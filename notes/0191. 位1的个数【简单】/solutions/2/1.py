class Solution:
    def hammingWeight(self, n: int) -> int:
        count = 0
        # Brian Kernighan：每次清除最右边的 1
        while n:
            count += 1
            n &= n - 1
        return count
