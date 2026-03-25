class Solution:
    def longestBeautifulSubstring(self, word: str) -> int:
        ans = 0
        count = 1
        distinct = 1
        for i in range(1, len(word)):
            if word[i] >= word[i - 1]:
                count += 1
                if word[i] > word[i - 1]:
                    distinct += 1
            else:
                count = 1
                distinct = 1
            if distinct == 5:
                ans = max(ans, count)
        return ans
