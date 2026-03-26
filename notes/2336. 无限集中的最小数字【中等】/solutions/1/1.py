import heapq


class SmallestInfiniteSet:

    def __init__(self):
        self.cur = 1
        self.added_back: list[int] = []
        self.in_heap: set[int] = set()

    def popSmallest(self) -> int:
        if self.added_back and self.added_back[0] < self.cur:
            val = heapq.heappop(self.added_back)
            self.in_heap.discard(val)
            return val
        val = self.cur
        self.cur += 1
        return val

    def addBack(self, num: int) -> None:
        if num < self.cur and num not in self.in_heap:
            self.in_heap.add(num)
            heapq.heappush(self.added_back, num)
