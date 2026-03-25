class Solution:
    def getStrongest(self, arr: list[int], k: int) -> list[int]:
        arr.sort()
        m = arr[(len(arr) - 1) // 2]
        left, right = 0, len(arr) - 1
        res: list[int] = []
        while len(res) < k:
            if abs(arr[right] - m) >= abs(arr[left] - m):
                res.append(arr[right])
                right -= 1
            else:
                res.append(arr[left])
                left += 1
        return res
