class Solution:
    def longestWord(self, words: List[str]) -> str:
        words.sort()
        built = {''}
        res = ''
        for w in words:
            if w[:-1] in built:
                built.add(w)
                if len(w) > len(res):
                    res = w
        return res
