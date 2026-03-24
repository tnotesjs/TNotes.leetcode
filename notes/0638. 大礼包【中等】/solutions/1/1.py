class Solution:
    def shoppingOffers(self, price: List[int], special: List[List[int]], needs: List[int]) -> int:
        @cache
        def dfs(needs):
            cost = sum(n * p for n, p in zip(needs, price))
            for sp in special:
                nxt = tuple(n - s for n, s in zip(needs, sp[:-1]))
                if all(x >= 0 for x in nxt):
                    cost = min(cost, sp[-1] + dfs(nxt))
            return cost
        return dfs(tuple(needs))
