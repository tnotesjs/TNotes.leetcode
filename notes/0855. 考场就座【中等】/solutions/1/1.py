class ExamRoom:
    def __init__(self, n: int):
        self.n = n
        self.seats = []

    def seat(self) -> int:
        if not self.seats:
            self.seats.append(0)
            return 0
        max_dist = self.seats[0]
        best = 0
        for i in range(1, len(self.seats)):
            d = (self.seats[i] - self.seats[i - 1]) // 2
            if d > max_dist:
                max_dist = d
                best = self.seats[i - 1] + d
        if self.n - 1 - self.seats[-1] > max_dist:
            best = self.n - 1
        import bisect
        bisect.insort(self.seats, best)
        return best

    def leave(self, p: int) -> None:
        self.seats.remove(p)
