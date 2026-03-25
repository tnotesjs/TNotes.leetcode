class Solution:
    def maxValue(self, n: str, x: int) -> str:
        xc = str(x)
        if n[0] == '-':
            for i in range(1, len(n)):
                if n[i] > xc:
                    return n[:i] + xc + n[i:]
            return n + xc
        else:
            for i in range(len(n)):
                if n[i] < xc:
                    return n[:i] + xc + n[i:]
            return n + xc
