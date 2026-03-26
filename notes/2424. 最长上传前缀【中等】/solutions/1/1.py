class LUPrefix:
    def __init__(self, n: int):
        self.uploaded = set()
        self.longest = 0

    def upload(self, video: int) -> None:
        self.uploaded.add(video)
        while self.longest + 1 in self.uploaded:
            self.longest += 1

    def longest(self) -> int:
        return self.longest
