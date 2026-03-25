class Solution:
    def numOfMinutes(self, n: int, headID: int, manager: list[int], informTime: list[int]) -> int:
        children = defaultdict(list)
        for i in range(n):
            if manager[i] != -1:
                children[manager[i]].append(i)

        def dfs(node: int) -> int:
            return informTime[node] + max((dfs(c) for c in children[node]), default=0)

        return dfs(headID)
