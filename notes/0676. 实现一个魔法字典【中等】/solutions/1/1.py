class MagicDictionary:
    def __init__(self):
        self.words = []

    def buildDict(self, dictionary: List[str]) -> None:
        self.words = dictionary

    def search(self, searchWord: str) -> bool:
        for word in self.words:
            if len(word) != len(searchWord):
                continue
            diff = sum(a != b for a, b in zip(word, searchWord))
            if diff == 1:
                return True
        return False
