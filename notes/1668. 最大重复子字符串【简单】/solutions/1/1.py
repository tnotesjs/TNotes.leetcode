class Solution:
    def maxRepeating(self, sequence: str, word: str) -> int:
        max_times = len(sequence) // len(word)
        rep = ''
        ans = 0

        for k in range(1, max_times + 1):
            rep += word
            if rep in sequence:
                ans = k
            else:
                break

        return ans
