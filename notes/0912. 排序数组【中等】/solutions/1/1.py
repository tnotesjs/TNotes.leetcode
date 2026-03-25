class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def merge_sort(arr, l, r):
            if l >= r: return
            m = (l + r) // 2
            merge_sort(arr, l, m)
            merge_sort(arr, m + 1, r)
            tmp = arr[l:r + 1]
            i, j, k = 0, m - l + 1, l
            while i <= m - l and j <= r - l:
                if tmp[i] <= tmp[j]: arr[k] = tmp[i]; i += 1
                else: arr[k] = tmp[j]; j += 1
                k += 1
            while i <= m - l: arr[k] = tmp[i]; i += 1; k += 1
            while j <= r - l: arr[k] = tmp[j]; j += 1; k += 1
        merge_sort(nums, 0, len(nums) - 1)
        return nums
