class Solution:
    def takeCharacters(self, s: str, k: int) -> int:
        n = len(s)
        total = [0, 0, 0]
        for c in s:
            total[ord(c) - ord('a')] += 1
        if any(t < k for t in total):
            return -1
        cnt = [0, 0, 0]
        max_win = l = 0
        for r in range(n):
            cnt[ord(s[r]) - ord('a')] += 1
            while total[0] - cnt[0] < k or total[1] - cnt[1] < k or total[2] - cnt[2] < k:
                cnt[ord(s[l]) - ord('a')] -= 1
                l += 1
            max_win = max(max_win, r - l + 1)
        return n - max_win
