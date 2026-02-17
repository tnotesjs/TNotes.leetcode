class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        first = [-1] * 26
        ans = -1

        for i, ch in enumerate(s):
            idx = ord(ch) - ord("a")
            if first[idx] == -1:
                first[idx] = i
            else:
                ans = max(ans, i - first[idx] - 1)

        return ans
