class Solution:
    def isHappy(self, n: int) -> bool:
        def getSumOfSquares(num: int) -> int:
            s = 0
            while num > 0:
                digit = num % 10
                s += digit * digit
                num //= 10
            return s

        # 用集合记录出现过的数，检测是否进入环
        seen = set()
        while n != 1 and n not in seen:
            seen.add(n)
            n = getSumOfSquares(n)
        return n == 1
