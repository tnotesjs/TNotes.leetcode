class Solution:
    def minimumOperationsToMakeEqual(self, x: int, y: int) -> int:
        if x <= y:
            return y - x
        from functools import cache

        @cache
        def dfs(val: int) -> int:
            if val <= y:
                return y - val
            res = val - y
            res = min(res, (val % 5) + 1 + dfs(val // 5))
            res = min(res, (5 - val % 5) + 1 + dfs(val // 5 + 1))
            res = min(res, (val % 11) + 1 + dfs(val // 11))
            res = min(res, (11 - val % 11) + 1 + dfs(val // 11 + 1))
            return res

        return dfs(x)
