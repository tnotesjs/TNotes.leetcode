class Solution:
    def shortestSubstrings(self, arr: list[str]) -> list[str]:
        n = len(arr)
        res = []
        for i in range(n):
            best = ""
            for length in range(1, len(arr[i]) + 1):
                for start in range(len(arr[i]) - length + 1):
                    sub = arr[i][start:start + length]
                    if all(sub not in arr[j] for j in range(n) if j != i):
                        if best == "" or sub < best:
                            best = sub
                if best:
                    break
            res.append(best)
        return res
