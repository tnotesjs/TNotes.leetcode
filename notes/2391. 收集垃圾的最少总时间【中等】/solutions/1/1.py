class Solution:
    def garbageCollection(self, garbage: list[str], travel: list[int]) -> int:
        total = 0
        last = {'M': 0, 'P': 0, 'G': 0}
        for i, g in enumerate(garbage):
            total += len(g)
            for c in g:
                last[c] = i
        prefix = [0] * len(garbage)
        for i in range(1, len(garbage)):
            prefix[i] = prefix[i - 1] + travel[i - 1]
        total += prefix[last['M']] + prefix[last['P']] + prefix[last['G']]
        return total
