class Solution:
    def makeIntegerBeautiful(self, n: int, target: int) -> int:
        def digit_sum(x):
            s = 0
            while x:
                s += x % 10
                x //= 10
            return s

        add = 0
        base = 1
        while digit_sum(n) > target:
            remainder = n % (base * 10)
            carry = base * 10 - remainder
            n += carry
            add += carry
            base *= 10
        return add
