class Solution:
    def shortestPalindrome(self, s: str) -> str:
        if len(s) < 2:
            return s

        reversed_s = s[::-1]
        combined = s + "#" + reversed_s
        lps = [0] * len(combined)

        for i in range(1, len(combined)):
            j = lps[i - 1]
            while j > 0 and combined[i] != combined[j]:
                j = lps[j - 1]
            if combined[i] == combined[j]:
                j += 1
            lps[i] = j

        longest_prefix_length = lps[-1]
        return s[longest_prefix_length:][::-1] + s
