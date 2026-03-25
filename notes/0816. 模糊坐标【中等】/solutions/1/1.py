class Solution:
    def ambiguousCoordinates(self, s: str) -> List[str]:
        def valid(t: str) -> list:
            res = []
            if t == '0' or t[0] != '0':
                res.append(t)
            for i in range(1, len(t)):
                left, right = t[:i], t[i:]
                if (len(left) > 1 and left[0] == '0') or right[-1] == '0':
                    continue
                res.append(left + '.' + right)
            return res
        s = s[1:-1]
        ans = []
        for i in range(1, len(s)):
            for l in valid(s[:i]):
                for r in valid(s[i:]):
                    ans.append(f'({l}, {r})')
        return ans
