class Solution:
    def groupThePeople(self, groupSizes: list[int]) -> list[list[int]]:
        groups = defaultdict(list)
        res = []
        for i, size in enumerate(groupSizes):
            groups[size].append(i)
            if len(groups[size]) == size:
                res.append(groups[size])
                groups[size] = []
        return res
