class RangeFreqQuery:
    def __init__(self, arr: list[int]):
        from collections import defaultdict
        self.idx_map = defaultdict(list)
        for i, v in enumerate(arr):
            self.idx_map[v].append(i)

    def query(self, left: int, right: int, value: int) -> int:
        from bisect import bisect_left, bisect_right
        idxs = self.idx_map.get(value)
        if not idxs:
            return 0
        return bisect_right(idxs, right) - bisect_left(idxs, left)
