class Solution:
    def countVowels(self, word: str) -> int:
        n = len(word)
        ans = 0
        for i, c in enumerate(word):
            if c in 'aeiou':
                ans += (i + 1) * (n - i)
        return ans
