class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        for i in range(len(s)):
            # 同构 ⇒ 当前字符在各自串中首次出现的下标相同
            if s.index(s[i]) != t.index(t[i]):
                return False
        return True
