class Solution:
    def minMovesToCaptureTheQueen(self, a: int, b: int, c: int, d: int, e: int, f: int) -> int:
        # 车和皇后同行
        if a == e and not (c == a and min(b, f) < d < max(b, f)):
            return 1
        # 车和皇后同列
        if b == f and not (d == b and min(a, e) < c < max(a, e)):
            return 1
        # 象和皇后同对角线
        if abs(c - e) == abs(d - f):
            if c - d == e - f:
                blocked = (a - b == c - d) and min(c, e) < a < max(c, e)
            else:
                blocked = (a + b == c + d) and min(c, e) < a < max(c, e)
            if not blocked:
                return 1
        return 2
