class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        res: list[str] = []
        counts = [['a', a], ['b', b], ['c', c]]
        while True:
            counts.sort(key=lambda x: -x[1])
            placed = False
            for item in counts:
                if item[1] == 0:
                    continue
                if len(res) >= 2 and res[-1] == item[0] and res[-2] == item[0]:
                    continue
                res.append(item[0])
                item[1] -= 1
                placed = True
                break
            if not placed:
                break
        return ''.join(res)
