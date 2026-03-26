class Solution:
    def divisibilityArray(self, word: str, m: int) -> list[int]:
        res = []
        rem = 0
        for c in word:
            rem = (rem * 10 + int(c)) % m
            res.append(1 if rem == 0 else 0)
        return res
