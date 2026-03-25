class Solution:
    def hasAllCodes(self, s: str, k: int) -> bool:
        if len(s) < k:
            return False
        seen: set[str] = set()
        for i in range(len(s) - k + 1):
            seen.add(s[i:i + k])
        return len(seen) == (1 << k)
