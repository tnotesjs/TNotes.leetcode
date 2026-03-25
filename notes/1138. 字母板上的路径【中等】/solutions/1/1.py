class Solution:
    def alphabetBoardPath(self, target: str) -> str:
        r = c = 0
        res = []
        for ch in target:
            code = ord(ch) - 97
            tr, tc = code // 5, code % 5
            while r > tr: res.append('U'); r -= 1
            while c > tc: res.append('L'); c -= 1
            while r < tr: res.append('D'); r += 1
            while c < tc: res.append('R'); c += 1
            res.append('!')
        return ''.join(res)
