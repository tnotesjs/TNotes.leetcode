class Solution:
    def areSentencesSimilar(self, sentence1: str, sentence2: str) -> bool:
        a, b = sentence1.split(), sentence2.split()
        if len(a) > len(b):
            a, b = b, a
        i = j = 0
        while i < len(a) and a[i] == b[i]:
            i += 1
        while j < len(a) - i and a[-(j + 1)] == b[-(j + 1)]:
            j += 1
        return i + j >= len(a)
