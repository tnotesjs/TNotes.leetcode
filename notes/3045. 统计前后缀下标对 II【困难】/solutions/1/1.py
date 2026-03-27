class Solution:
    def countPrefixSuffixPairs(self, words: list[str]) -> int:
        root = {}
        ans = 0
        for word in words:
            n = len(word)
            node = root
            for i in range(n):
                key = (word[i], word[n - 1 - i])
                if key not in node:
                    node[key] = [{}, 0]
                node = node[key]
                ans += node[1]
            node[1] += 1
        return ans
