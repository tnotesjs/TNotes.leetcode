class Solution:
    def maximumEvenSplit(self, finalSum: int) -> List[int]:
        if finalSum % 2 != 0:
            return []
        res = []
        cur = 2
        remaining = finalSum
        while remaining > cur * 2:
            res.append(cur)
            remaining -= cur
            cur += 2
        res.append(remaining)
        return res
