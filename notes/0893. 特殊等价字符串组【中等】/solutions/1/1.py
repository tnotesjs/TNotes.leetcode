class Solution:
    def numSpecialEquivGroups(self, words: List[str]) -> int:
        return len({
            tuple(sorted(w[::2])) + tuple(sorted(w[1::2]))
            for w in words
        })
