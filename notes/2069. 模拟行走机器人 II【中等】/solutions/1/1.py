class Robot:
    def __init__(self, width: int, height: int):
        self.w = width
        self.h = height
        self.perimeter = 2 * (width + height - 2)
        self.pos = 0
        self.moved = False

    def step(self, num: int) -> None:
        self.moved = True
        self.pos = (self.pos + num) % self.perimeter

    def getPos(self) -> list[int]:
        p = self.pos
        if p < self.w:
            return [p, 0]
        p -= self.w - 1
        if p < self.h:
            return [self.w - 1, p]
        p -= self.h - 1
        if p < self.w:
            return [self.w - 1 - p, self.h - 1]
        p -= self.w - 1
        return [0, self.h - 1 - p]

    def getDir(self) -> str:
        if not self.moved:
            return 'East'
        p = self.pos
        if p == 0:
            return 'South'
        if p < self.w:
            return 'East'
        p -= self.w - 1
        if p < self.h:
            return 'North'
        p -= self.h - 1
        if p < self.w:
            return 'West'
        return 'South'
