class Solution:
    def getMinSwaps(self, num: str, k: int) -> int:
        def next_perm(arr):
            i = len(arr) - 2
            while i >= 0 and arr[i] >= arr[i + 1]:
                i -= 1
            if i >= 0:
                j = len(arr) - 1
                while arr[j] <= arr[i]:
                    j -= 1
                arr[i], arr[j] = arr[j], arr[i]
            arr[i + 1:] = arr[i + 1:][::-1]

        target = list(num)
        for _ in range(k):
            next_perm(target)
        cur = list(num)
        swaps = 0
        for i in range(len(cur)):
            if cur[i] != target[i]:
                j = i + 1
                while cur[j] != target[i]:
                    j += 1
                while j > i:
                    cur[j], cur[j - 1] = cur[j - 1], cur[j]
                    j -= 1
                    swaps += 1
        return swaps
