class Solution:
    def longestSubarray(self, nums: list[int], limit: int) -> int:
        from collections import deque
        max_q: deque[int] = deque()
        min_q: deque[int] = deque()
        left = 0
        res = 0
        for right, val in enumerate(nums):
            while max_q and nums[max_q[-1]] <= val:
                max_q.pop()
            while min_q and nums[min_q[-1]] >= val:
                min_q.pop()
            max_q.append(right)
            min_q.append(right)
            while nums[max_q[0]] - nums[min_q[0]] > limit:
                left += 1
                if max_q[0] < left:
                    max_q.popleft()
                if min_q[0] < left:
                    min_q.popleft()
            res = max(res, right - left + 1)
        return res
