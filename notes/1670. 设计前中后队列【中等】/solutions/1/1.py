class FrontMiddleBackQueue:
    def __init__(self):
        self.arr = []

    def pushFront(self, val: int) -> None:
        self.arr.insert(0, val)

    def pushMiddle(self, val: int) -> None:
        self.arr.insert(len(self.arr) // 2, val)

    def pushBack(self, val: int) -> None:
        self.arr.append(val)

    def popFront(self) -> int:
        return self.arr.pop(0) if self.arr else -1

    def popMiddle(self) -> int:
        return self.arr.pop((len(self.arr) - 1) // 2) if self.arr else -1

    def popBack(self) -> int:
        return self.arr.pop() if self.arr else -1
