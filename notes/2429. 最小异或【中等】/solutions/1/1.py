class Solution:
    def minimizeXor(self, num1: int, num2: int) -> int:
        target = bin(num2).count('1')
        res = 0
        for i in range(29, -1, -1):
            if target > 0 and (num1 & (1 << i)):
                res |= (1 << i)
                target -= 1
        for i in range(30):
            if target > 0 and not (res & (1 << i)):
                res |= (1 << i)
                target -= 1
        return res
