class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        parent = {}
        weight = {}  # weight[x] = x / root(x)

        def find(x):
            if x not in parent:
                parent[x] = x
                weight[x] = 1.0
            if parent[x] != x:
                root = find(parent[x])
                weight[x] *= weight[parent[x]]
                parent[x] = root
            return parent[x]

        def union(a, b, val):
            ra, rb = find(a), find(b)
            if ra == rb:
                return
            parent[ra] = rb
            weight[ra] = val * weight[b] / weight[a]

        for (a, b), val in zip(equations, values):
            union(a, b, val)

        res = []
        for a, b in queries:
            if a not in parent or b not in parent or find(a) != find(b):
                res.append(-1.0)
            else:
                res.append(weight[a] / weight[b])
        return res
