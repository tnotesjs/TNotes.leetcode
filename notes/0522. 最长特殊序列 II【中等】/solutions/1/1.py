class Solution:
    def findLUSlength(self, strs: List[str]) -> int:
        def is_sub(a, b):
            it = iter(b)
            return all(c in it for c in a)
        res = -1
        for i, s in enumerate(strs):
            if all(i == j or not is_sub(s, strs[j]) for j in range(len(strs))):
                res = max(res, len(s))
        return res
