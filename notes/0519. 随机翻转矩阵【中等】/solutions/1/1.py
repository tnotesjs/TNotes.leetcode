class Solution:
    def __init__(self, m: int, n: int):
        self.m = m
        self.n = n
        self.total = m * n
        self.map = {}

    def flip(self) -> List[int]:
        r = random.randint(0, self.total - 1)
        self.total -= 1
        val = self.map.get(r, r)
        self.map[r] = self.map.get(self.total, self.total)
        return [val // self.n, val % self.n]

    def reset(self) -> None:
        self.total = self.m * self.n
        self.map.clear()
