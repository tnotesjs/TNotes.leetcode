class Solution:
    def generateParenthesis(self, n: int) -> list[str]:
        ans: list[str] = []
        path = [''] * (n * 2)

        def dfs(left_used: int, right_used: int) -> None:
            if left_used == n and right_used == n:
                ans.append(''.join(path))
                return

            idx = left_used + right_used

            if left_used < n:
                path[idx] = '('
                dfs(left_used + 1, right_used)

            if right_used < left_used:
                path[idx] = ')'
                dfs(left_used, right_used + 1)

        dfs(0, 0)
        return ans
