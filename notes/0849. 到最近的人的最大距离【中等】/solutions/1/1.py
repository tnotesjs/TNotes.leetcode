class Solution:
    def maxDistToClosest(self, seats: List[int]) -> int:
        n = len(seats)
        res = 0
        last = -1
        for i in range(n):
            if seats[i] == 1:
                if last == -1:
                    res = i
                else:
                    res = max(res, (i - last) // 2)
                last = i
        res = max(res, n - 1 - last)
        return res
