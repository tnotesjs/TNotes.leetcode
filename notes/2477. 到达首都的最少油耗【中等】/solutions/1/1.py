class Solution:
    def minimumFuelCost(self, roads: list[list[int]], seats: int) -> int:
        from math import ceil
        n = len(roads) + 1
        g = [[] for _ in range(n)]
        for u, v in roads:
            g[u].append(v)
            g[v].append(u)

        self.fuel = 0

        def dfs(u, parent):
            people = 1
            for v in g[u]:
                if v != parent:
                    people += dfs(v, u)
            if u != 0:
                self.fuel += ceil(people / seats)
            return people

        dfs(0, -1)
        return self.fuel
