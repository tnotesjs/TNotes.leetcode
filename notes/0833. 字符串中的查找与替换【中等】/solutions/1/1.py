class Solution:
    def findReplaceString(self, s: str, indices: List[int], sources: List[str], targets: List[str]) -> str:
        ops = sorted(zip(indices, sources, targets), reverse=True)
        res = list(s)
        for idx, src, tgt in ops:
            if s[idx:idx + len(src)] == src:
                res[idx:idx + len(src)] = list(tgt)
        return ''.join(res)
