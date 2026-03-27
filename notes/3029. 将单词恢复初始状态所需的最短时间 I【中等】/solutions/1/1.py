class Solution:
    def minimumTimeToInitialState(self, word: str, k: int) -> int:
        n = len(word)
        for t in range(1, (n + k - 1) // k + 1):
            start = t * k
            if start >= n or word[start:] == word[:n - start]:
                return t
        return (n + k - 1) // k
