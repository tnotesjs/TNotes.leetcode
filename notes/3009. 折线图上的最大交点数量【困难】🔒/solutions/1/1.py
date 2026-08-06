class Solution:
    def beautifulIndices(self, s: str, a: str, b: str, k: int) -> list[int]:
        def kmp_search(text: str, pattern: str) -> list[int]:
            m = len(pattern)
            lps = [0] * m
            length = 0
            i = 1
            while i < m:
                if pattern[i] == pattern[length]:
                    length += 1
                    lps[i] = length
                    i += 1
                elif length:
                    length = lps[length - 1]
                else:
                    i += 1
            res = []
            j = 0
            for i in range(len(text)):
                while j and text[i] != pattern[j]:
                    j = lps[j - 1]
                if text[i] == pattern[j]:
                    j += 1
                if j == m:
                    res.append(i - m + 1)
                    j = lps[j - 1]
            return res

        pos_a = kmp_search(s, a)
        pos_b = kmp_search(s, b)
        res = []
        j = 0
        for i in pos_a:
            while j < len(pos_b) and pos_b[j] < i - k:
                j += 1
            if j < len(pos_b) and pos_b[j] <= i + k:
                res.append(i)
        return res
