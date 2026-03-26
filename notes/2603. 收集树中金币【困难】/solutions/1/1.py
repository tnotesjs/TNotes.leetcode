class Solution:
    def collectTheCoins(self, coins: list[int], edges: list[list[int]]) -> int:
        n = len(coins)
        g = [set() for _ in range(n)]
        deg = [0] * n
        for u, v in edges:
            g[u].add(v)
            g[v].add(u)
            deg[u] += 1
            deg[v] += 1

        # 第一轮：删除不含金币的叶子
        queue = [i for i in range(n) if deg[i] == 1 and coins[i] == 0]
        while queue:
            nq = []
            for u in queue:
                for v in g[u]:
                    g[v].discard(u)
                    deg[v] -= 1
                    if deg[v] == 1 and coins[v] == 0:
                        nq.append(v)
                g[u].clear()
                deg[u] = 0
            queue = nq

        # 第二轮：剥离两层叶子
        for _ in range(2):
            leaves = [i for i in range(n) if deg[i] == 1]
            for u in leaves:
                for v in g[u]:
                    g[v].discard(u)
                    deg[v] -= 1
                g[u].clear()
                deg[u] = 0

        return sum(len(g[i]) for i in range(n))
