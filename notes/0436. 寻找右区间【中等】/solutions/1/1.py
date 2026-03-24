class Solution:
    def findRightInterval(self, intervals: List[List[int]]) -> List[int]:
        sorted_starts = sorted((iv[0], i) for i, iv in enumerate(intervals))
        res = []
        for _, end in intervals:
            lo, hi = 0, len(sorted_starts)
            while lo < hi:
                mid = (lo + hi) // 2
                if sorted_starts[mid][0] >= end:
                    hi = mid
                else:
                    lo = mid + 1
            res.append(sorted_starts[lo][1] if lo < len(sorted_starts) else -1)
        return res
