class Solution:
    def getAncestors(self, n: int, edges: list[list[int]]) -> list[list[int]]:
        graph = [[] for _ in range(n)]
        for u, v in edges:
            graph[u].append(v)
        ans = [set() for _ in range(n)]
        for i in range(n):
            visited = {i}
            queue = [i]
            while queue:
                node = queue.pop(0)
                for nxt in graph[node]:
                    if nxt not in visited:
                        visited.add(nxt)
                        ans[nxt].add(i)
                        queue.append(nxt)
        return [sorted(s) for s in ans]
