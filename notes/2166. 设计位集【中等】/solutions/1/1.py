class Bitset:
    def __init__(self, size: int):
        self.arr = [0] * size
        self.size = size
        self.ones = 0
        self.flipped = False

    def fix(self, idx: int) -> None:
        if self.flipped:
            if self.arr[idx] == 1:
                self.arr[idx] = 0
                self.ones += 1
        else:
            if self.arr[idx] == 0:
                self.arr[idx] = 1
                self.ones += 1

    def unfix(self, idx: int) -> None:
        if self.flipped:
            if self.arr[idx] == 0:
                self.arr[idx] = 1
                self.ones -= 1
        else:
            if self.arr[idx] == 1:
                self.arr[idx] = 0
                self.ones -= 1

    def flip(self) -> None:
        self.flipped = not self.flipped
        self.ones = self.size - self.ones

    def all(self) -> bool:
        return self.ones == self.size

    def one(self) -> bool:
        return self.ones > 0

    def count(self) -> int:
        return self.ones

    def toString(self) -> str:
        if self.flipped:
            return ''.join(str(1 - x) for x in self.arr)
        return ''.join(str(x) for x in self.arr)
