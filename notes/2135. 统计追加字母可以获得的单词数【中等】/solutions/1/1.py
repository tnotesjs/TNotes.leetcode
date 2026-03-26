class Solution:
    def wordCount(self, startWords: List[str], targetWords: List[str]) -> int:
        seen = set()
        for w in startWords:
            mask = 0
            for c in w:
                mask |= 1 << (ord(c) - ord('a'))
            seen.add(mask)
        res = 0
        for w in targetWords:
            mask = 0
            for c in w:
                mask |= 1 << (ord(c) - ord('a'))
            for c in w:
                if mask ^ (1 << (ord(c) - ord('a'))) in seen:
                    res += 1
                    break
        return res
