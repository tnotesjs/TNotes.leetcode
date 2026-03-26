class Solution:
    def minimizeConcatenatedLength(self, words: list[str]) -> int:
        from functools import lru_cache
        n = len(words)

        @lru_cache(maxsize=None)
        def dfs(i: int, first: str, last: str) -> int:
            if i == n:
                return 0
            w = words[i]
            # 拼接在后面
            r1 = dfs(i + 1, first, w[-1]) + len(w) - (1 if last == w[0] else 0)
            # 拼接在前面
            r2 = dfs(i + 1, w[0], last) + len(w) - (1 if w[-1] == first else 0)
            return min(r1, r2)

        return len(words[0]) + dfs(1, words[0][0], words[0][-1])
