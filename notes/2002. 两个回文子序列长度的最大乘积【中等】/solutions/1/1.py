class Solution:
    def maxProduct(self, s: str) -> int:
        n = len(s)
        total = 1 << n
        palin_len = [0] * total
        for mask in range(1, total):
            sub = [s[i] for i in range(n) if mask & (1 << i)]
            if sub == sub[::-1]:
                palin_len[mask] = len(sub)
        ans = 0
        for m1 in range(1, total):
            if not palin_len[m1]:
                continue
            m2 = (total - 1) ^ m1
            while m2 > 0:
                if palin_len[m2]:
                    ans = max(ans, palin_len[m1] * palin_len[m2])
                m2 = (m2 - 1) & ((total - 1) ^ m1)
        return ans
