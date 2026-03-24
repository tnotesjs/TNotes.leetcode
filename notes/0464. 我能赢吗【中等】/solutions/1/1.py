class Solution:
    def canIWin(self, maxChoosableInteger: int, desiredTotal: int) -> bool:
        if maxChoosableInteger * (maxChoosableInteger + 1) // 2 < desiredTotal:
            return False
        if desiredTotal <= 0:
            return True
        @cache
        def dfs(used, remain):
            for i in range(1, maxChoosableInteger + 1):
                if used & (1 << i):
                    continue
                if i >= remain or not dfs(used | (1 << i), remain - i):
                    return True
            return False
        return dfs(0, desiredTotal)
