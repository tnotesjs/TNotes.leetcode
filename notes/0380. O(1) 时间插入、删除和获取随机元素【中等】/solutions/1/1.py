class RandomizedSet:
    def __init__(self):
        self.map = {}  # val -> index
        self.list = []

    def insert(self, val: int) -> bool:
        if val in self.map:
            return False
        self.map[val] = len(self.list)
        self.list.append(val)
        return True

    def remove(self, val: int) -> bool:
        if val not in self.map:
            return False
        idx = self.map[val]
        last = self.list[-1]
        self.list[idx] = last
        self.map[last] = idx
        self.list.pop()
        del self.map[val]
        return True

    def getRandom(self) -> int:
        return random.choice(self.list)
