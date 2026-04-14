class Solution:
    def romanToInt(self, s: str) -> int:
        mapping = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        ans = 0
        for i in range(len(s)):
            cur = mapping[s[i]]
            next_ = mapping[s[i + 1]] if i + 1 < len(s) else 0
            if cur < next_:  # 特殊情况：左小右大，取反累加
                ans -= cur
            else:  # 正常情况：直接累加
                ans += cur
        return ans
