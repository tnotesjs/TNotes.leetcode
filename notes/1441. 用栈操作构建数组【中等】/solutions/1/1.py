class Solution:
    def buildArray(self, target: list[int], n: int) -> list[str]:
        res: list[str] = []
        j = 0
        for i in range(1, n + 1):
            if j >= len(target):
                break
            res.append('Push')
            if target[j] == i:
                j += 1
            else:
                res.append('Pop')
        return res
