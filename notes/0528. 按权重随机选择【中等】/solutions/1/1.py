class Solution:
    def __init__(self, w: List[int]):
        self.prefix = []
        total = 0
        for val in w:
            total += val
            self.prefix.append(total)
        self.total = total

    def pickIndex(self) -> int:
        target = random.randint(1, self.total)
        return bisect_left(self.prefix, target)
