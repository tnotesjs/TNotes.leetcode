class Trie:
    def __init__(self):
        self.children = {}
        self.is_end = False

    def insert(self, word: str) -> None:
        node = self
        for ch in word:
            if ch not in node.children:
                node.children[ch] = Trie()
            node = node.children[ch]
        node.is_end = True

    def search(self, word: str) -> bool:
        node = self._search_prefix(word)
        return node is not None and node.is_end

    def startsWith(self, prefix: str) -> bool:
        return self._search_prefix(prefix) is not None

    def _search_prefix(self, prefix: str):
        node = self
        for ch in prefix:
            if ch not in node.children:
                return None
            node = node.children[ch]
        return node
