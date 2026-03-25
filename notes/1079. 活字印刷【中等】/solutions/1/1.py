class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        count = [0] * 26
        for ch in tiles:
            count[ord(ch) - 65] += 1
        res = 0

        def dfs():
            nonlocal res
            for i in range(26):
                if count[i] == 0:
                    continue
                res += 1
                count[i] -= 1
                dfs()
                count[i] += 1

        dfs()
        return res
