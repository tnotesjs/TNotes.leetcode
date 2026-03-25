class Solution:
    def longestWPI(self, hours: list[int]) -> int:
        first = {}
        prefix = res = 0
        for i, h in enumerate(hours):
            prefix += 1 if h > 8 else -1
            if prefix > 0:
                res = i + 1
            else:
                if prefix not in first:
                    first[prefix] = i
                if prefix - 1 in first:
                    res = max(res, i - first[prefix - 1])
        return res
