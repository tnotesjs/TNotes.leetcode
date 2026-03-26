class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        res = []
        j = 0
        for i, c in enumerate(s):
            if j < len(spaces) and i == spaces[j]:
                res.append(' ')
                j += 1
            res.append(c)
        return ''.join(res)
