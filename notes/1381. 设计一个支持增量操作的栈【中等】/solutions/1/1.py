class CustomStack:
    def __init__(self, maxSize: int):
        self.max_size = maxSize
        self.stack = []
        self.inc = [0] * maxSize

    def push(self, x: int) -> None:
        if len(self.stack) < self.max_size:
            self.stack.append(x)

    def pop(self) -> int:
        if not self.stack:
            return -1
        i = len(self.stack) - 1
        val = self.stack.pop() + self.inc[i]
        if i > 0:
            self.inc[i - 1] += self.inc[i]
        self.inc[i] = 0
        return val

    def increment(self, k: int, val: int) -> None:
        idx = min(k, len(self.stack)) - 1
        if idx >= 0:
            self.inc[idx] += val
