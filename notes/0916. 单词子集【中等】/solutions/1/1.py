from collections import Counter

class Solution:
    def wordSubsets(self, words1: list[str], words2: list[str]) -> list[str]:
        max_freq = Counter()
        for word in words2:
            freq = Counter(word)
            for ch, cnt in freq.items():
                max_freq[ch] = max(max_freq[ch], cnt)

        return [word for word in words1
                if all(Counter(word)[ch] >= cnt for ch, cnt in max_freq.items())]
