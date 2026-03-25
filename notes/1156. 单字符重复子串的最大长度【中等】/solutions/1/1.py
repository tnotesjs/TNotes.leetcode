class Solution:
    def maxRepOpt1(self, text: str) -> int:
        from collections import Counter
        freq = Counter(text)
        groups = []
        i, n = 0, len(text)
        while i < n:
            j = i
            while j < n and text[j] == text[i]:
                j += 1
            groups.append((text[i], j - i))
            i = j
        ans = 0
        for g in range(len(groups)):
            c, length = groups[g]
            ans = max(ans, min(length + 1, freq[c]))
            if g + 2 < len(groups) and groups[g + 1][1] == 1 and groups[g + 2][0] == c:
                ans = max(ans, min(length + groups[g + 2][1] + 1, freq[c]))
        return ans
