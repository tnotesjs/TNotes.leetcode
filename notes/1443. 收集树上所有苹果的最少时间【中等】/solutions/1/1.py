class Solution:
    def minTime(self, n: int, edges: list[list[int]], hasApple: list[bool]) -> int:
        from collections import defaultdict
        adj: dict[int, list[int]] = defaultdict(list)
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)

        def dfs(node: int, parent: int) -> int:
            time = 0
            for child in adj[node]:
                if child == parent:
                    continue
                child_time = dfs(child, node)
                if child_time > 0 or hasApple[child]:
                    time += child_time + 2
            return time

        return dfs(0, -1)
