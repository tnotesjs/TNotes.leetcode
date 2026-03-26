class Solution:
    def makeTheIntegerZero(self, num1: int, num2: int) -> int:
        for k in range(61):
            val = num1 - k * num2
            if val < k:
                return -1
            if bin(val).count('1') <= k:
                return k
        return -1
