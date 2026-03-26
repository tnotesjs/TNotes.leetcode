class Solution:
    def platesBetweenCandles(self, s: str, queries: list[list[int]]) -> list[int]:
        n = len(s)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + (1 if s[i] == '*' else 0)
        left = [-1] * n
        right = [-1] * n
        for i in range(n):
            left[i] = i if s[i] == '|' else (left[i - 1] if i > 0 else -1)
        for i in range(n - 1, -1, -1):
            right[i] = i if s[i] == '|' else (right[i + 1] if i < n - 1 else -1)
        ans = []
        for l, r in queries:
            ll = right[l]
            rr = left[r]
            ans.append(prefix[rr] - prefix[ll] if ll != -1 and rr != -1 and ll < rr else 0)
        return ans
