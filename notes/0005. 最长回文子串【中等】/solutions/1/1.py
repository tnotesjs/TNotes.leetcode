class Solution:
    def longestPalindrome(self, s: str) -> str:
        def centerSpread(l, r):
            while l >= 0 and r < len(s) and s[l] == s[r]:
                l -= 1
                r += 1
            # 回退一步到最后匹配位置
            return l + 1, r - l - 1  # (start, length)

        start, max_len = 0, 1
        for i in range(len(s) - 1):
            for l, r in [(i, i), (i, i + 1)]:  # 奇数中心 / 偶数中心
                s0, cur_len = centerSpread(l, r)
                if cur_len > max_len:
                    start, max_len = s0, cur_len

        return s[start : start + max_len]
