class Solution:
    def getSmallestString(self, n: int, k: int) -> str:
        res = ['a'] * n
        k -= n
        for i in range(n - 1, -1, -1):
            if k <= 0:
                break
            add = min(25, k)
            res[i] = chr(ord('a') + add)
            k -= add
        return ''.join(res)
