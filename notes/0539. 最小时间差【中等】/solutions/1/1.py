class Solution:
    def findMinDifference(self, timePoints: List[str]) -> int:
        mins = sorted(int(t[:2]) * 60 + int(t[3:]) for t in timePoints)
        res = 1440 - mins[-1] + mins[0]
        for i in range(1, len(mins)):
            res = min(res, mins[i] - mins[i - 1])
        return res
