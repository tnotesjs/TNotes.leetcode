class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        limit = len(arr) // 4
        count = 1

        for i in range(1, len(arr)):
            count = count + 1 if arr[i] == arr[i - 1] else 1
            if count > limit:
                return arr[i]

        return arr[0]
