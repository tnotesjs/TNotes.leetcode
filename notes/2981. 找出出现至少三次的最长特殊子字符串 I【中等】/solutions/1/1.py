class Solution:
    def maximumLength(self, s: str) -> int:
        top = [[0, 0, 0] for _ in range(26)]
        i, n = 0, len(s)
        while i < n:
            ch = ord(s[i]) - 97
            j = i
            while j < n and s[j] == s[i]:
                j += 1
            length = j - i
            t = top[ch]
            if length > t[0]:
                t[2], t[1], t[0] = t[1], t[0], length
            elif length > t[1]:
                t[2], t[1] = t[1], length
            elif length > t[2]:
                t[2] = length
            i = j
        ans = -1
        for a, b, c in top:
            ans = max(ans, a - 2, min(a - 1, b), c)
        return ans if ans > 0 else -1
