class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n < 0:
            x = 1 / x
            n = -n
        result = 1
        while n > 0:
            if n & 1: result *= x  # 当前位为 1，累乘当前底数
            x *= x  # 底数平方
            n >>= 1
        return result
