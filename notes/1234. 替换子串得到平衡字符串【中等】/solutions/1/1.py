class Solution:
    def balancedString(self, s: str) -> int:
        n = len(s)
        target = n // 4
        cnt = Counter(s)
        if all(cnt[c] == target for c in 'QWER'):
            return 0
        ans = n
        left = 0
        for right, c in enumerate(s):
            cnt[c] -= 1
            while all(cnt[ch] <= target for ch in 'QWER'):
                ans = min(ans, right - left + 1)
                cnt[s[left]] += 1
                left += 1
        return ans
