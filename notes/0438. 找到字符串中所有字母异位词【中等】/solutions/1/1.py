class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        res = []
        if len(s) < len(p):
            return res
        count = [0] * 26
        window = [0] * 26
        for ch in p:
            count[ord(ch) - 97] += 1
        for i in range(len(s)):
            window[ord(s[i]) - 97] += 1
            if i >= len(p):
                window[ord(s[i - len(p)]) - 97] -= 1
            if i >= len(p) - 1 and window == count:
                res.append(i - len(p) + 1)
        return res
