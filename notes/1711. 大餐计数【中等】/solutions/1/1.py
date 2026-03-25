from collections import Counter

class Solution:
    def countPairs(self, deliciousness: list[int]) -> int:
        MOD = 10 ** 9 + 7
        count = Counter()
        res = 0
        for d in deliciousness:
            p = 1
            while p <= 1 << 21:
                if p - d in count:
                    res = (res + count[p - d]) % MOD
                p <<= 1
            count[d] += 1
        return res
