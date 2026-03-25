class RLEIterator:
    def __init__(self, encoding: List[int]):
        self.encoding = encoding
        self.idx = 0

    def next(self, n: int) -> int:
        while self.idx < len(self.encoding):
            if self.encoding[self.idx] >= n:
                self.encoding[self.idx] -= n
                return self.encoding[self.idx + 1]
            n -= self.encoding[self.idx]
            self.idx += 2
        return -1
