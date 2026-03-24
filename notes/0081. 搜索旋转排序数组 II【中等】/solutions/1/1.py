class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target: return True
            # 无法判断有序半边时，收缩边界
            if nums[left] == nums[mid]: left += 1; continue
            if nums[left] < nums[mid]:  # 左半段有序
                if nums[left] <= target < nums[mid]: right = mid - 1
                else: left = mid + 1
            else:  # 右半段有序
                if nums[mid] < target <= nums[right]: left = mid + 1
                else: right = mid - 1
        return False
