class Solution:
    def countCompleteComponents(self, n: int, edges: list[list[int]]) -> int:
        parent = list(range(n))
        rank = [0] * n

        def find(x: int) -> int:
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(x: int, y: int) -> None:
            px, py = find(x), find(y)
            if px == py:
                return
            if rank[px] < rank[py]:
                parent[px] = py
            elif rank[px] > rank[py]:
                parent[py] = px
            else:
                parent[py] = px
                rank[px] += 1

        for a, b in edges:
            union(a, b)

        vertex_count: dict[int, int] = {}
        edge_count: dict[int, int] = {}
        for i in range(n):
            p = find(i)
            vertex_count[p] = vertex_count.get(p, 0) + 1
        for a, b in edges:
            p = find(a)
            edge_count[p] = edge_count.get(p, 0) + 1

        ans = 0
        for p, v in vertex_count.items():
            e = edge_count.get(p, 0)
            if e == v * (v - 1) // 2:
                ans += 1
        return ans
