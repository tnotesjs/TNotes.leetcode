class Solution:
    def distributeCookies(self, cookies: list[int], k: int) -> int:
        children = [0] * k
        self.res = float('inf')

        def dfs(idx: int) -> None:
            if idx == len(cookies):
                self.res = min(self.res, max(children))
                return
            seen = set()
            for i in range(k):
                if children[i] in seen:
                    continue
                seen.add(children[i])
                if children[i] + cookies[idx] >= self.res:
                    continue
                children[i] += cookies[idx]
                dfs(idx + 1)
                children[i] -= cookies[idx]

        dfs(0)
        return self.res
