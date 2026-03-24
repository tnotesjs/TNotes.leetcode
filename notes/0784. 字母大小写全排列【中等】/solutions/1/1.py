class Solution:
    def letterCasePermutation(self, s: str) -> List[str]:
        res = []
        def dfs(i: int, path: list):
            if i == len(s):
                res.append(''.join(path))
                return
            c = s[i]
            if c.isdigit():
                path.append(c)
                dfs(i + 1, path)
                path.pop()
            else:
                path.append(c.lower())
                dfs(i + 1, path)
                path.pop()
                path.append(c.upper())
                dfs(i + 1, path)
                path.pop()
        dfs(0, [])
        return res
