class Solution:
    def maxDepthAfterSplit(self, seq: str) -> list[int]:
        res = []
        depth = 0
        for ch in seq:
            if ch == '(':
                depth += 1
                res.append(depth & 1)
            else:
                res.append(depth & 1)
                depth -= 1
        return res
