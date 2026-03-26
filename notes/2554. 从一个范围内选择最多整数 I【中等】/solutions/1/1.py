class Solution:
    def maxCount(self, banned: list[int], n: int, maxSum: int) -> int:
        s = set(banned)
        total = 0
        cnt = 0
        for i in range(1, n + 1):
            if i in s:
                continue
            if total + i > maxSum:
                break
            total += i
            cnt += 1
        return cnt
