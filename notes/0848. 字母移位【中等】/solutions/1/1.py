class Solution:
    def shiftingLetters(self, s: str, shifts: List[int]) -> str:
        n = len(s)
        total = 0
        res = list(s)
        for i in range(n - 1, -1, -1):
            total = (total + shifts[i]) % 26
            res[i] = chr((ord(s[i]) - 97 + total) % 26 + 97)
        return ''.join(res)
