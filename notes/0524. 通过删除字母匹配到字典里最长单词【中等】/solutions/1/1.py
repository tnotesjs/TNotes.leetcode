class Solution:
    def findLongestWord(self, s: str, dictionary: List[str]) -> str:
        dictionary.sort(key=lambda x: (-len(x), x))
        for word in dictionary:
            i = 0
            for ch in s:
                if i < len(word) and ch == word[i]:
                    i += 1
            if i == len(word):
                return word
        return ''
