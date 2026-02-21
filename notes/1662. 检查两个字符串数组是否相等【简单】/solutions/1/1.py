class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        i, j = 0, 0
        p, q = 0, 0

        while i < len(word1) and j < len(word2):
            if word1[i][p] != word2[j][q]:
                return False

            p += 1
            q += 1

            if p == len(word1[i]):
                i += 1
                p = 0
            if q == len(word2[j]):
                j += 1
                q = 0

        return i == len(word1) and j == len(word2)
