class Solution:
    def waysToBuyPensPencils(self, total: int, cost1: int, cost2: int) -> int:
        count = 0
        pens = 0
        while pens * cost1 <= total:
            remaining = total - pens * cost1
            count += remaining // cost2 + 1
            pens += 1
        return count
