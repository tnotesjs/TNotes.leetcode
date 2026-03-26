class Solution:
    def longestPalindrome(self, words: List[str]) -> int:
        count = Counter(words)
        res = 0
        has_center = False
        for w, c in count.items():
            rev = w[::-1]
            if w == rev:
                res += c // 2 * 4
                if c % 2 == 1:
                    has_center = True
            elif w < rev and rev in count:
                res += min(c, count[rev]) * 4
        if has_center:
            res += 2
        return res
