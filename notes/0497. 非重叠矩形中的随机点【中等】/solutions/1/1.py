class Solution:
    def __init__(self, rects: List[List[int]]):
        self.rects = rects
        self.prefix = []
        total = 0
        for a, b, x, y in rects:
            total += (x - a + 1) * (y - b + 1)
            self.prefix.append(total)
        self.total = total

    def pick(self) -> List[int]:
        target = random.randint(1, self.total)
        lo, hi = 0, len(self.prefix) - 1
        while lo < hi:
            mid = (lo + hi) // 2
            if self.prefix[mid] < target:
                lo = mid + 1
            else:
                hi = mid
        a, b, x, y = self.rects[lo]
        w = x - a + 1
        offset = target - (self.prefix[lo - 1] if lo > 0 else 0) - 1
        return [a + offset % w, b + offset // w]
