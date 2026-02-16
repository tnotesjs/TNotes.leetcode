class Solution:
    def trimMean(self, arr: List[int]) -> float:
        arr.sort()
        n = len(arr)
        cut = n // 20
        total = 0

        for i in range(cut, n - cut):
            total += arr[i]

        return total / (n - 2 * cut)
