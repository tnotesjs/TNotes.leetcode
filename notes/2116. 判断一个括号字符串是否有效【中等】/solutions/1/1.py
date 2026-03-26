class Solution:
    def canBeValid(self, s: str, locked: str) -> bool:
        n = len(s)
        if n % 2 != 0:
            return False
        mn = mx = 0
        for i in range(n):
            if locked[i] == '0':
                mn -= 1
                mx += 1
            elif s[i] == '(':
                mn += 1
                mx += 1
            else:
                mn -= 1
                mx -= 1
            if mx < 0:
                return False
            if mn < 0:
                mn = 0
        return mn == 0
