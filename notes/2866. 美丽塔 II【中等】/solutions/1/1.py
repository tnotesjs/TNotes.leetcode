class Solution:
    def maximumSumOfHeights(self, maxHeights: list[int]) -> int:
        n = len(maxHeights)
        left = [0] * n
        stk = []
        for i in range(n):
            while stk and maxHeights[stk[-1]] >= maxHeights[i]:
                stk.pop()
            if not stk:
                left[i] = maxHeights[i] * (i + 1)
            else:
                j = stk[-1]
                left[i] = left[j] + maxHeights[i] * (i - j)
            stk.append(i)
        right = [0] * n
        stk = []
        for i in range(n - 1, -1, -1):
            while stk and maxHeights[stk[-1]] >= maxHeights[i]:
                stk.pop()
            if not stk:
                right[i] = maxHeights[i] * (n - i)
            else:
                j = stk[-1]
                right[i] = right[j] + maxHeights[i] * (j - i)
            stk.append(i)
        return max(left[i] + right[i] - maxHeights[i] for i in range(n))
