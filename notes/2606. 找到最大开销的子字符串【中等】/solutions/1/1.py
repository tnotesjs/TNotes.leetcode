class Solution:
    def maximumCostSubstring(self, s: str, chars: str, vals: list[int]) -> int:
        val = list(range(1, 27))
        for c, v in zip(chars, vals):
            val[ord(c) - ord('a')] = v
        ans = cur = 0
        for ch in s:
            cur = max(cur + val[ord(ch) - ord('a')], 0)
            ans = max(ans, cur)
        return ans
