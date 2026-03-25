class Solution:
    def maxSumMinProduct(self, nums: list[int]) -> int:
        MOD = 10 ** 9 + 7
        n = len(nums)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + nums[i]
        left = [0] * n
        right = [0] * n
        stack = []
        for i in range(n):
            while stack and nums[stack[-1]] >= nums[i]:
                stack.pop()
            left[i] = stack[-1] + 1 if stack else 0
            stack.append(i)
        stack.clear()
        for i in range(n - 1, -1, -1):
            while stack and nums[stack[-1]] >= nums[i]:
                stack.pop()
            right[i] = stack[-1] - 1 if stack else n - 1
            stack.append(i)
        ans = 0
        for i in range(n):
            s = prefix[right[i] + 1] - prefix[left[i]]
            ans = max(ans, nums[i] * s)
        return ans % MOD
