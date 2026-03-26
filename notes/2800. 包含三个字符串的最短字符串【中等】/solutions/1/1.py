class Solution:
    def minimumString(self, a: str, b: str, c: str) -> str:
        def merge(s: str, t: str) -> str:
            if t in s:
                return s
            for i in range(min(len(s), len(t)), -1, -1):
                if s.endswith(t[:i]):
                    return s + t[i:]
            return s + t

        from itertools import permutations
        best = ''
        for p in permutations([a, b, c]):
            res = merge(merge(p[0], p[1]), p[2])
            if not best or len(res) < len(best) or (len(res) == len(best) and res < best):
                best = res
        return best
