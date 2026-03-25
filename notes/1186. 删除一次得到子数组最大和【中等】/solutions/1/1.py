class Solution:
    def maximumSum(self, arr: list[int]) -> int:
        no_delete = arr[0]
        with_delete = float('-inf')
        ans = arr[0]
        for i in range(1, len(arr)):
            with_delete = max(no_delete, with_delete + arr[i])
            no_delete = max(arr[i], no_delete + arr[i])
            ans = max(ans, no_delete, with_delete)
        return ans
