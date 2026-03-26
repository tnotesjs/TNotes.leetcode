class Solution:
    def productQueries(self, n: int, queries: list[list[int]]) -> list[int]:
        MOD = 10 ** 9 + 7
        powers = []
        while n:
            lb = n & (-n)
            powers.append(lb)
            n -= lb
        ans = []
        for l, r in queries:
            prod = 1
            for i in range(l, r + 1):
                prod = prod * powers[i] % MOD
            ans.append(prod)
        return ans
