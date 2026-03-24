class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        a, b = 0, int(c ** 0.5)
        while a <= b:
            s = a * a + b * b
            if s == c:
                return True
            elif s < c:
                a += 1
            else:
                b -= 1
        return False
