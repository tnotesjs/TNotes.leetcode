class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        mx = -1

        for i in range(len(arr) - 1, -1, -1):
            cur = arr[i]
            arr[i] = mx
            if cur > mx:
                mx = cur

        return arr
