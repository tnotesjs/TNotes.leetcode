class Solution:
    def twoCitySchedCost(self, costs: list[list[int]]) -> int:
        costs.sort(key=lambda x: x[0] - x[1])
        n = len(costs) // 2
        return sum(c[0] for c in costs[:n]) + sum(c[1] for c in costs[n:])
