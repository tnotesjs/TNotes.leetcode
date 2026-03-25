class Solution:
    def checkIfCanBreak(self, s1: str, s2: str) -> bool:
        a = sorted(s1)
        b = sorted(s2)
        return all(x >= y for x, y in zip(a, b)) or all(y >= x for x, y in zip(a, b))
