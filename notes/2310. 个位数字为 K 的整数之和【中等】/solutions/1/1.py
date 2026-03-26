class Solution:
    def minimumNumbers(self, num: int, k: int) -> int:
        if num == 0:
            return 0
        for cnt in range(1, 11):
            if cnt * k > num:
                return -1
            if (cnt * k) % 10 == num % 10:
                return cnt
        return -1
