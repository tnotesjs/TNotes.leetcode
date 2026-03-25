class Solution:
    def expressiveWords(self, s: str, words: List[str]) -> int:
        def is_stretchy(word: str) -> bool:
            i = j = 0
            while i < len(s) and j < len(word):
                if s[i] != word[j]: return False
                len_s = len_w = 1
                while i + len_s < len(s) and s[i + len_s] == s[i]: len_s += 1
                while j + len_w < len(word) and word[j + len_w] == word[j]: len_w += 1
                if len_s < len_w or (len_s > len_w and len_s < 3): return False
                i += len_s; j += len_w
            return i == len(s) and j == len(word)
        return sum(1 for w in words if is_stretchy(w))
