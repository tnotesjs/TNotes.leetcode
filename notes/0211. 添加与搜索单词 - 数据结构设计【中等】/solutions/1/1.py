class WordDictionary:
    def __init__(self):
        self.children = {}
        self.is_end = False

    def addWord(self, word: str) -> None:
        node = self
        for ch in word:
            if ch not in node.children:
                node.children[ch] = WordDictionary()
            node = node.children[ch]
        node.is_end = True

    def search(self, word: str) -> bool:
        def dfs(node, i):
            if i == len(word):
                return node.is_end
            if word[i] == '.':
                return any(dfs(child, i + 1) for child in node.children.values())
            if word[i] not in node.children:
                return False
            return dfs(node.children[word[i]], i + 1)
        return dfs(self, 0)
