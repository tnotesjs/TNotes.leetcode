class Solution:
    def findLexSmallestString(self, s: str, a: int, b: int) -> str:
        visited = set()
        queue = [s]
        visited.add(s)
        res = s
        while queue:
            cur = queue.pop(0)
            if cur < res:
                res = cur
            # 操作 1：奇数位加 a
            added = list(cur)
            for i in range(1, len(cur), 2):
                added[i] = str((int(added[i]) + a) % 10)
            added = ''.join(added)
            if added not in visited:
                visited.add(added)
                queue.append(added)
            # 操作 2：右移 b 位
            rotated = cur[-b:] + cur[:-b]
            if rotated not in visited:
                visited.add(rotated)
                queue.append(rotated)
        return res
