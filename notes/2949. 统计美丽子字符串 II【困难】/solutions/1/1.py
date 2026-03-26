from collections import defaultdict


class Solution:
    def beautifulSubstrings(self, s: str, k: int) -> int:
        v0, temp = 1, k
        p = 2
        while p * p <= temp:
            e = 0
            while temp % p == 0:
                temp //= p
                e += 1
            v0 *= p ** ((e + 1) // 2)
            p += 1
        if temp > 1:
            v0 *= temp

        mod = 2 * v0
        vowels = set('aeiou')
        freq = defaultdict(int)
        freq[(0, 0)] = 1
        diff = count = 0

        for i, ch in enumerate(s):
            diff += 1 if ch in vowels else -1
            key = (diff, (i + 1) % mod)
            count += freq[key]
            freq[key] += 1

        return count
