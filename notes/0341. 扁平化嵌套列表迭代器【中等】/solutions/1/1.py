class NestedIterator:
    def __init__(self, nestedList):
        self.data = []
        def flatten(lst):
            for item in lst:
                if item.isInteger():
                    self.data.append(item.getInteger())
                else:
                    flatten(item.getList())
        flatten(nestedList)
        self.index = 0

    def next(self) -> int:
        val = self.data[self.index]
        self.index += 1
        return val

    def hasNext(self) -> bool:
        return self.index < len(self.data)
