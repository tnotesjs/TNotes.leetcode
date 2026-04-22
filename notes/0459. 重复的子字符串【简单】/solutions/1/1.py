class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        n = len(s)

        for length in range(1, n // 2 + 1):
            if n % length != 0:
                continue

            pattern = s[:length]
            repeated = pattern * (n // length)
            if repeated == s:
                return True

        return False
