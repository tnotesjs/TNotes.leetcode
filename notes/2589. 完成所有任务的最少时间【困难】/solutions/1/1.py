class Solution:
    def findMinimumTime(self, tasks: list[list[int]]) -> int:
        tasks.sort(key=lambda x: x[1])
        run = [False] * 2001
        for start, end, duration in tasks:
            d = duration
            for t in range(start, end + 1):
                if run[t]:
                    d -= 1
            t = end
            while d > 0:
                if not run[t]:
                    run[t] = True
                    d -= 1
                t -= 1
        return sum(run)
