from sortedcontainers import SortedList

class Solution:
    def minimumCost(self, nums: list[int], k: int, dist: int) -> int:
        n = len(nums)
        need = k - 1
        sl = SortedList()
        top_sum = 0
        ans = float('inf')
        left = 1

        for right in range(1, n):
            # 插入当前元素
            idx = sl.bisect_left(nums[right])
            sl.add(nums[right])
            if idx < need:
                top_sum += nums[right]
                if len(sl) > need:
                    top_sum -= sl[need]

            # 收缩窗口
            while right - left > dist:
                out_val = nums[left]
                out_idx = sl.index(out_val)
                sl.remove(out_val)
                if out_idx < need:
                    top_sum -= out_val
                    if len(sl) >= need:
                        top_sum += sl[need - 1]
                left += 1

            if len(sl) >= need:
                ans = min(ans, top_sum)

        return nums[0] + ans
