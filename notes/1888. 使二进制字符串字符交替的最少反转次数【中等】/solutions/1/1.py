class Solution:
    def minFlips(self, s: str) -> int:
        n = len(s)
        ss = s + s
        diff0 = diff1 = 0
        for i in range(n):
            if int(ss[i]) != i % 2:
                diff0 += 1
            if int(ss[i]) != 1 - i % 2:
                diff1 += 1
        ans = min(diff0, diff1)
        for i in range(n, 2 * n):
            c = int(ss[i])
            if c != i % 2:
                diff0 += 1
            if c != 1 - i % 2:
                diff1 += 1
            oc = int(ss[i - n])
            if oc != (i - n) % 2:
                diff0 -= 1
            if oc != 1 - (i - n) % 2:
                diff1 -= 1
            ans = min(ans, diff0, diff1)
        return ans
