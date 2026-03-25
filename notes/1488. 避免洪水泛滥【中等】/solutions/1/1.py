from sortedcontainers import SortedList

class Solution:
    def avoidFlood(self, rains: list[int]) -> list[int]:
        n = len(rains)
        res = [0] * n
        full: dict[int, int] = {}
        dry = SortedList()
        for i in range(n):
            if rains[i] == 0:
                dry.add(i)
                res[i] = 1
            else:
                res[i] = -1
                lake = rains[i]
                if lake in full:
                    idx = dry.bisect_right(full[lake])
                    if idx == len(dry):
                        return []
                    day = dry[idx]
                    res[day] = lake
                    dry.remove(day)
                full[lake] = i
        return res
