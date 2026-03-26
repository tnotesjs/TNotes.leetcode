class Solution:
    def maximumSubsequenceCount(self, text: str, pattern: str) -> int:
        a, b = pattern[0], pattern[1]
        count_a = count_b = pairs = 0
        for ch in text:
            if ch == b:
                pairs += count_a
                count_b += 1
            if ch == a:
                count_a += 1
        return pairs + max(count_a, count_b)
