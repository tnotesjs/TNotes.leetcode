class Solution:
    def baseNeg2(self, n: int) -> str:
        if n == 0:
            return '0'
        res = ''
        while n != 0:
            remainder = n & 1
            res = str(remainder) + res
            n = (n - remainder) // -2
        return res
