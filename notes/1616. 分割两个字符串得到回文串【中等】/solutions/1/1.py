class Solution:
    def checkPalindromeFormation(self, a: str, b: str) -> bool:
        def check(s1: str, s2: str) -> bool:
            i, j = 0, len(s1) - 1
            while i < j and s1[i] == s2[j]:
                i += 1
                j -= 1
            if i >= j:
                return True
            return s1[i:j+1] == s1[i:j+1][::-1] or s2[i:j+1] == s2[i:j+1][::-1]
        return check(a, b) or check(b, a)
