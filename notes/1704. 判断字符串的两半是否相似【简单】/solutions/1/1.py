class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        vowels = set("aeiouAEIOU")
        mid = len(s) // 2
        cnt = 0
        for c in s[:mid]:
            if c in vowels:
                cnt += 1
        for c in s[mid:]:
            if c in vowels:
                cnt -= 1
        return cnt == 0
