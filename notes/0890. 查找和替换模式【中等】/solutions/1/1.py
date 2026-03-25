class Solution:
    def findAndReplacePattern(self, words: List[str], pattern: str) -> List[str]:
        def match(word: str) -> bool:
            w2p, p2w = {}, {}
            for w, p in zip(word, pattern):
                if w2p.setdefault(w, p) != p: return False
                if p2w.setdefault(p, w) != w: return False
            return True
        return [w for w in words if match(w)]
