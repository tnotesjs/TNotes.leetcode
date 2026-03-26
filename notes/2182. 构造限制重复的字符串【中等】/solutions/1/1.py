class Solution:
    def repeatLimitedString(self, s: str, repeatLimit: int) -> str:
        freq = [0] * 26
        for c in s:
            freq[ord(c) - ord('a')] += 1
        res = []
        i = 25
        while i >= 0:
            if freq[i] == 0:
                i -= 1
                continue
            count = min(freq[i], repeatLimit)
            res.append(chr(ord('a') + i) * count)
            freq[i] -= count
            if freq[i] > 0:
                j = i - 1
                while j >= 0 and freq[j] == 0:
                    j -= 1
                if j < 0:
                    break
                res.append(chr(ord('a') + j))
                freq[j] -= 1
            else:
                i -= 1
        return ''.join(res)
