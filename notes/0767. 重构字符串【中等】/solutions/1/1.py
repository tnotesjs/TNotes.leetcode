class Solution:
    def reorganizeString(self, s: str) -> str:
        freq = [0] * 26
        for c in s:
            freq[ord(c) - 97] += 1
        n = len(s)
        max_char = max(range(26), key=lambda i: freq[i])
        if freq[max_char] > (n + 1) // 2:
            return ''
        res = [''] * n
        idx = 0
        while freq[max_char] > 0:
            res[idx] = chr(max_char + 97)
            freq[max_char] -= 1
            idx += 2
        for i in range(26):
            while freq[i] > 0:
                if idx >= n:
                    idx = 1
                res[idx] = chr(i + 97)
                freq[i] -= 1
                idx += 2
        return ''.join(res)
