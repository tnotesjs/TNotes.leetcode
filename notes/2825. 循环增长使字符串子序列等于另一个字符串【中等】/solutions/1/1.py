class Solution:
    def canMakeSubsequence(self, str1: str, str2: str) -> bool:
        j = 0
        for c in str1:
            if j < len(str2) and (c == str2[j] or chr((ord(c) - 97 + 1) % 26 + 97) == str2[j]):
                j += 1
        return j == len(str2)
