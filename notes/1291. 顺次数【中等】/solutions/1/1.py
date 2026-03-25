class Solution:
    def sequentialDigits(self, low: int, high: int) -> list[int]:
        res = []
        for start in range(1, 10):
            num = start
            for nxt in range(start + 1, 10):
                num = num * 10 + nxt
                if low <= num <= high:
                    res.append(num)
                if num > high:
                    break
        res.sort()
        return res
