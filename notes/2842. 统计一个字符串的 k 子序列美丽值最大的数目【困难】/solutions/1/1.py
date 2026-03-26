class Solution:
    def countKSubsequencesWithMaxBeauty(self, s: str, k: int) -> int:
        MOD = 10 ** 9 + 7
        freq = Counter(s)
        freqs = sorted(freq.values(), reverse=True)
        if k > len(freqs):
            return 0
        boundary = freqs[k - 1]
        result = 1
        rem = k
        count_bound = freqs.count(boundary)
        for f in freqs:
            if f > boundary:
                result = result * f % MOD
                rem -= 1
        result = result * comb(count_bound, rem) % MOD * pow(boundary, rem, MOD) % MOD
        return result
