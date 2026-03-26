class Solution:
    def countAnagrams(self, s: str) -> int:
        MOD = 10**9 + 7
        ans = 1
        for word in s.split():
            n = len(word)
            cnt: dict[str, int] = {}
            for c in word:
                cnt[c] = cnt.get(c, 0) + 1
            f = 1
            for i in range(1, n + 1):
                f = f * i % MOD
            ans = ans * f % MOD
            for v in cnt.values():
                f = 1
                for i in range(1, v + 1):
                    f = f * i % MOD
                ans = ans * pow(f, MOD - 2, MOD) % MOD
        return ans
