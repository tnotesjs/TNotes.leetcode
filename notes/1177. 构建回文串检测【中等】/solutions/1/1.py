class Solution:
    def canMakePaliQueries(self, s: str, queries: list[list[int]]) -> list[bool]:
        n = len(s)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] ^ (1 << (ord(s[i]) - 97))
        res = []
        for left, right, k in queries:
            xor = prefix[right + 1] ^ prefix[left]
            odd = bin(xor).count('1')
            res.append(odd // 2 <= k)
        return res
