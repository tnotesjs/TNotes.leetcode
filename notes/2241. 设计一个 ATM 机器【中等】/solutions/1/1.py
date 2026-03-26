class ATM:
    def __init__(self):
        self.counts = [0] * 5
        self.denoms = [20, 50, 100, 200, 500]

    def deposit(self, banknotesCount: list[int]) -> None:
        for i in range(5):
            self.counts[i] += banknotesCount[i]

    def withdraw(self, amount: int) -> list[int]:
        take = [0] * 5
        remain = amount
        for i in range(4, -1, -1):
            take[i] = min(self.counts[i], remain // self.denoms[i])
            remain -= take[i] * self.denoms[i]
        if remain > 0:
            return [-1]
        for i in range(5):
            self.counts[i] -= take[i]
        return take
