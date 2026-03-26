class Solution:
    def shiftingLetters(self, s: str, shifts: list[list[int]]) -> str:
        n = len(s)
        diff = [0] * (n + 1)
        for start, end, direction in shifts:
            d = 1 if direction == 1 else -1
            diff[start] += d
            diff[end + 1] -= d
        result = []
        shift = 0
        for i in range(n):
            shift += diff[i]
            result.append(chr((ord(s[i]) - ord('a') + shift) % 26 + ord('a')))
        return ''.join(result)
