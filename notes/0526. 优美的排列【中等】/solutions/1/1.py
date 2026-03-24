class Solution:
    def countArrangement(self, n: int) -> int:
        self.count = 0
        visited = [False] * (n + 1)
        def dfs(pos):
            if pos > n:
                self.count += 1
                return
            for i in range(1, n + 1):
                if not visited[i] and (i % pos == 0 or pos % i == 0):
                    visited[i] = True
                    dfs(pos + 1)
                    visited[i] = False
        dfs(1)
        return self.count
