class Solution:
    def rotatedDigits(self, n: int) -> int:
        def is_good(num: int) -> bool:
            diff = False
            while num > 0:
                d = num % 10
                if d in (3, 4, 7):
                    return False
                if d in (2, 5, 6, 9):
                    diff = True
                num //= 10
            return diff
        return sum(1 for i in range(1, n + 1) if is_good(i))
