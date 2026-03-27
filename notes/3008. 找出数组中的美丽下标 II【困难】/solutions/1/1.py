class Solution:
    def beautifulIndices(self, s: str, a: str, b: str, k: int) -> list[int]:
        from bisect import bisect_left

        def kmp_search(text: str, pattern: str) -> list[int]:
            m = len(pattern)
            fail = [0] * m
            for i in range(1, m):
                j = fail[i - 1]
                while j > 0 and pattern[j] != pattern[i]:
                    j = fail[j - 1]
                if pattern[j] == pattern[i]:
                    j += 1
                fail[i] = j
            positions = []
            j = 0
            for i, ch in enumerate(text):
                while j > 0 and ch != pattern[j]:
                    j = fail[j - 1]
                if ch == pattern[j]:
                    j += 1
                if j == m:
                    positions.append(i - m + 1)
                    j = fail[j - 1]
            return positions

        pos_a = kmp_search(s, a)
        pos_b = kmp_search(s, b)
        res = []
        for i in pos_a:
            idx = bisect_left(pos_b, i - k)
            if idx < len(pos_b) and pos_b[idx] <= i + k:
                res.append(i)
        return res
