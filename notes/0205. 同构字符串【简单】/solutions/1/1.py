class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        # 双向映射，保证一对一
        s2t, t2s = {}, {}
        for a, b in zip(s, t):
            if a in s2t:
                if s2t[a] != b:
                    return False
            else:
                s2t[a] = b
            if b in t2s:
                if t2s[b] != a:
                    return False
            else:
                t2s[b] = a
        return True
