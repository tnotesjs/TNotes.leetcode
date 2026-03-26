class Solution:
    def countPairs(self, n: int, edges: list[list[int]]) -> int:
        parent = list(range(n))
        size = [1] * n

        def find(x: int) -> int:
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        for a, b in edges:
            ra, rb = find(a), find(b)
            if ra != rb:
                if size[ra] < size[rb]:
                    ra, rb = rb, ra
                parent[rb] = ra
                size[ra] += size[rb]

        res = visited = 0
        for i in range(n):
            if parent[i] == i:
                res += visited * size[i]
                visited += size[i]
        return res
