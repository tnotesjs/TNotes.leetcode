class Solution:
    def maxPalindromesAfterOperations(self, words: list[str]) -> int:
        from collections import Counter
        freq = Counter()
        for w in words:
            freq += Counter(w)
        pairs = sum(v // 2 for v in freq.values())
        lens = sorted(len(w) for w in words)
        ans = 0
        for l in lens:
            need = l // 2
            if pairs >= need:
                pairs -= need
                ans += 1
        return ans
