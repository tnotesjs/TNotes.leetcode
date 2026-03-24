class Solution:
    def frequencySort(self, s: str) -> str:
        freq = Counter(s)
        buckets = [[] for _ in range(len(s) + 1)]
        for ch, cnt in freq.items():
            buckets[cnt].append(ch)
        res = []
        for i in range(len(buckets) - 1, 0, -1):
            for ch in buckets[i]:
                res.append(ch * i)
        return ''.join(res)
