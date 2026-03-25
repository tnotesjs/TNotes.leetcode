class Solution:
    def minSetSize(self, arr: list[int]) -> int:
        freq = Counter(arr)
        counts = sorted(freq.values(), reverse=True)
        removed = 0
        half = len(arr) // 2
        for i, c in enumerate(counts):
            removed += c
            if removed >= half:
                return i + 1
        return len(counts)
