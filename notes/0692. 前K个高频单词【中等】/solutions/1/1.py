class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        freq = Counter(words)
        return sorted(freq, key=lambda w: (-freq[w], w))[:k]
