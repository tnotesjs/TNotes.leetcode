class Solution:
    def findLeastNumOfUniqueInts(self, arr: list[int], k: int) -> int:
        from collections import Counter
        counts = sorted(Counter(arr).values())
        removed = 0
        for c in counts:
            if k >= c:
                k -= c
                removed += 1
            else:
                break
        return len(counts) - removed
