class Solution:
    def maxEqualRowsAfterFlips(self, matrix: list[list[int]]) -> int:
        from collections import Counter
        count = Counter()
        for row in matrix:
            # normalize: flip if first element is 1
            key = tuple(v ^ row[0] for v in row)
            count[key] += 1
        return max(count.values())
