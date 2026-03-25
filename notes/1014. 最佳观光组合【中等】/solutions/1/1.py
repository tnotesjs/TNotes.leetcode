class Solution:
    def maxScoreSightseeingPair(self, values: list[int]) -> int:
        res = 0
        max_i = values[0]
        for j in range(1, len(values)):
            res = max(res, max_i + values[j] - j)
            max_i = max(max_i, values[j] + j)
        return res
