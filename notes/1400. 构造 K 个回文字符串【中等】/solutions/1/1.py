class Solution:
    def canConstruct(self, s: str, k: int) -> bool:
        if k > len(s):
            return False
        odd = sum(1 for c in set(s) if s.count(c) % 2 == 1)
        return odd <= k
