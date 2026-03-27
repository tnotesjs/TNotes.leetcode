class Solution:
    def canMakePalindromeQueries(self, s: str, queries: list[list[int]]) -> list[bool]:
        n = len(s)
        m = n // 2
        # pre1[i][ch]: count of ch in s[0..i-1]
        # pre2[i][ch]: count of ch in reversed second half [0..i-1]
        pre1 = [[0] * 26 for _ in range(m + 1)]
        pre2 = [[0] * 26 for _ in range(m + 1)]
        mis = [0] * (m + 1)

        for i in range(m):
            c1 = ord(s[i]) - 97
            c2 = ord(s[n - 1 - i]) - 97
            for ch in range(26):
                pre1[i + 1][ch] = pre1[i][ch] + (1 if ch == c1 else 0)
                pre2[i + 1][ch] = pre2[i][ch] + (1 if ch == c2 else 0)
            mis[i + 1] = mis[i] + (0 if c1 == c2 else 1)

        def cnt1(ch: int, l: int, r: int) -> int:
            return pre1[r + 1][ch] - pre1[l][ch]

        def cnt2(ch: int, l: int, r: int) -> int:
            return pre2[r + 1][ch] - pre2[l][ch]

        def mismatch(l: int, r: int) -> int:
            return 0 if l > r else mis[r + 1] - mis[l]

        res = []
        for a, b, c, d in queries:
            L, R = n - 1 - d, n - 1 - c
            left, right = min(a, L), max(b, R)
            ok = True

            if mismatch(0, left - 1) > 0 or mismatch(right + 1, m - 1) > 0:
                ok = False

            if ok and b < L and mismatch(b + 1, L - 1) > 0:
                ok = False
            if ok and R < a and mismatch(R + 1, a - 1) > 0:
                ok = False

            if ok:
                ol, or_ = max(a, L), min(b, R)
                for ch in range(26):
                    h1p = cnt1(ch, a, b)
                    h2p = cnt2(ch, L, R)
                    if ol > or_:
                        need1 = cnt2(ch, a, b)
                        need2 = cnt1(ch, L, R)
                    else:
                        need1 = (cnt2(ch, a, ol - 1) if a < ol else 0) + (cnt2(ch, or_ + 1, b) if or_ < b else 0)
                        need2 = (cnt1(ch, L, ol - 1) if L < ol else 0) + (cnt1(ch, or_ + 1, R) if or_ < R else 0)
                    if h1p < need1 or h2p < need2 or h1p - need1 != h2p - need2:
                        ok = False
                        break
            res.append(ok)
        return res
