class Solution:
    def isAdditiveNumber(self, num: str) -> bool:
        n = len(num)
        for i in range(1, n // 2 + 1):
            for j in range(i + 1, n):
                s1, s2 = num[:i], num[i:j]
                if len(s1) > 1 and s1[0] == '0':
                    break
                if len(s2) > 1 and s2[0] == '0':
                    continue
                a, b, pos = s1, s2, j
                while pos < n:
                    c = str(int(a) + int(b))
                    if not num.startswith(c, pos):
                        break
                    pos += len(c)
                    a, b = b, c
                if pos == n:
                    return True
        return False
