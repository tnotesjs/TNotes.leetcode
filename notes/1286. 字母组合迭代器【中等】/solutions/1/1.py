class CombinationIterator:
    def __init__(self, characters: str, combinationLength: int):
        self.combos = []
        def dfs(start: int, path: str):
            if len(path) == combinationLength:
                self.combos.append(path)
                return
            for i in range(start, len(characters)):
                dfs(i + 1, path + characters[i])
        dfs(0, '')
        self.idx = 0

    def next(self) -> str:
        res = self.combos[self.idx]
        self.idx += 1
        return res

    def hasNext(self) -> bool:
        return self.idx < len(self.combos)
