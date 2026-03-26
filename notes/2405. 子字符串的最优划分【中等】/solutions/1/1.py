class Solution:
    def partitionString(self, s: str) -> int:
        count = 1
        seen = set()
        for c in s:
            if c in seen:
                count += 1
                seen.clear()
            seen.add(c)
        return count
