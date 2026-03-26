from sortedcontainers import SortedList

class StockPrice:
    def __init__(self):
        self.map = {}
        self.latest = 0
        self.sl = SortedList()

    def update(self, timestamp: int, price: int) -> None:
        if timestamp in self.map:
            self.sl.remove(self.map[timestamp])
        self.map[timestamp] = price
        self.sl.add(price)
        self.latest = max(self.latest, timestamp)

    def current(self) -> int:
        return self.map[self.latest]

    def maximum(self) -> int:
        return self.sl[-1]

    def minimum(self) -> int:
        return self.sl[0]
