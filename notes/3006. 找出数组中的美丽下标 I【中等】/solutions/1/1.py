class Solution:
    def beautifulIndices(self, s: str, a: str, b: str, k: int) -> list[int]:
        from bisect import bisect_left
        n, la, lb = len(s), len(a), len(b)
        pos_a = [i for i in range(n - la + 1) if s[i:i + la] == a]
        pos_b = [i for i in range(n - lb + 1) if s[i:i + lb] == b]
        res = []
        for i in pos_a:
            idx = bisect_left(pos_b, i - k)
            if idx < len(pos_b) and pos_b[idx] <= i + k:
                res.append(i)
        return res
