class Solution:
    def countNumbersWithUniqueDigits(self, n: int) -> int:
        if n == 0:
            return 1
        res, product = 10, 9
        for i in range(2, min(n, 10) + 1):
            product *= (10 - i + 1)
            res += product
        return res
