class Solution:
    def maximumNumber(self, num: str, change: list[int]) -> str:
        arr = list(num)
        started = False
        for i in range(len(arr)):
            d = int(arr[i])
            if change[d] > d:
                arr[i] = str(change[d])
                started = True
            elif change[d] < d and started:
                break
        return ''.join(arr)
