class Solution:
    def getDistances(self, arr: List[int]) -> List[int]:
        n = len(arr)
        res = [0] * n
        groups = defaultdict(list)
        for i, v in enumerate(arr):
            groups[v].append(i)
        for indices in groups.values():
            m = len(indices)
            prefix = 0
            for k in range(m):
                res[indices[k]] += indices[k] * k - prefix
                prefix += indices[k]
            suffix = 0
            for k in range(m - 1, -1, -1):
                res[indices[k]] += suffix - indices[k] * (m - 1 - k)
                suffix += indices[k]
        return res
