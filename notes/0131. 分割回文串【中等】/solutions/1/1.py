class Solution:
    def partition(self, s: str) -> List[List[str]]:
        n = len(s)
        dp = [[True] * n for _ in range(n)]
        for i in range(n - 1, -1, -1):
            for j in range(i + 1, n):
                dp[i][j] = s[i] == s[j] and dp[i + 1][j - 1]
        res = []
        def backtrack(start, path):
            if start == n:
                res.append(path[:])
                return
            for end in range(start, n):
                if dp[start][end]:
                    path.append(s[start:end + 1])
                    backtrack(end + 1, path)
                    path.pop()
        backtrack(0, [])
        return res
