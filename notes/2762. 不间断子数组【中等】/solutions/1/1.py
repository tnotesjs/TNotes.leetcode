class Solution:
    def continuousSubarrays(self, nums: list[int]) -> int:
        from collections import deque
        res = 0
        left = 0
        maxQ = deque()  # 单调递减
        minQ = deque()  # 单调递增
        for right, v in enumerate(nums):
            while maxQ and nums[maxQ[-1]] <= v:
                maxQ.pop()
            maxQ.append(right)
            while minQ and nums[minQ[-1]] >= v:
                minQ.pop()
            minQ.append(right)
            while nums[maxQ[0]] - nums[minQ[0]] > 2:
                left += 1
                if maxQ[0] < left:
                    maxQ.popleft()
                if minQ[0] < left:
                    minQ.popleft()
            res += right - left + 1
        return res
