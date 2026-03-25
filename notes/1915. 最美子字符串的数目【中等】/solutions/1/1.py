class Solution:
    def wonderfulSubstrings(self, word: str) -> int:
        cnt = {0: 1}
        mask = res = 0
        for ch in word:
            mask ^= 1 << (ord(ch) - ord('a'))
            res += cnt.get(mask, 0)
            for i in range(10):
                res += cnt.get(mask ^ (1 << i), 0)
            cnt[mask] = cnt.get(mask, 0) + 1
        return res
