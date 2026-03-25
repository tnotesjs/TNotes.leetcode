class Solution:
    def closestCost(self, baseCosts: list[int], toppingCosts: list[int], target: int) -> int:
        self.ans = float('inf')

        def dfs(idx, cost):
            if abs(cost - target) < abs(self.ans - target) or \
               (abs(cost - target) == abs(self.ans - target) and cost < self.ans):
                self.ans = cost
            if idx == len(toppingCosts) or cost > target:
                return
            dfs(idx + 1, cost)
            dfs(idx + 1, cost + toppingCosts[idx])
            dfs(idx + 1, cost + toppingCosts[idx] * 2)

        for base in baseCosts:
            dfs(0, base)
        return self.ans
