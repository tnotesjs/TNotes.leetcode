class Solution:
    def findSubstringInWraproundString(self, s: str) -> int:
        max_len = [0] * 26
        length = 1
        for i in range(len(s)):
            if i > 0 and (ord(s[i]) - ord(s[i - 1])) % 26 == 1:
                length += 1
            else:
                length = 1
            idx = ord(s[i]) - 97
            max_len[idx] = max(max_len[idx], length)
        return sum(max_len)
