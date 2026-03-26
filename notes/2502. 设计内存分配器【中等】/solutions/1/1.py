class Allocator:
    def __init__(self, n: int):
        self.mem = [0] * n

    def allocate(self, size: int, mID: int) -> int:
        count = 0
        for i in range(len(self.mem)):
            if self.mem[i] == 0:
                count += 1
                if count == size:
                    for j in range(i - size + 1, i + 1):
                        self.mem[j] = mID
                    return i - size + 1
            else:
                count = 0
        return -1

    def freeMemory(self, mID: int) -> int:
        count = 0
        for i in range(len(self.mem)):
            if self.mem[i] == mID:
                self.mem[i] = 0
                count += 1
        return count
