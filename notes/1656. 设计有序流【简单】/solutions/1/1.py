class OrderedStream:

    def __init__(self, n: int):
        self.arr = [None] * n
        self.ptr = 1

    def insert(self, idKey: int, value: str) -> List[str]:
        self.arr[idKey - 1] = value

        if idKey != self.ptr:
            return []

        res = []
        while self.ptr <= len(self.arr) and self.arr[self.ptr - 1] is not None:
            res.append(self.arr[self.ptr - 1])
            self.ptr += 1

        return res


# Your OrderedStream object will be instantiated and called as such:
# obj = OrderedStream(n)
# param_1 = obj.insert(idKey,value)
