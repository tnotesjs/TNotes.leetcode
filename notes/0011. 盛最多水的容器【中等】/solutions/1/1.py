class Solution:
    def maxArea(self, height: List[int]) -> int:
        n = len(height)
        max_a = (n - 1) * min(height[0], height[-1])

        # -> 以左柱为基准，找距离左柱最远的且高度大于等于左柱的右柱
        for l in range(n):
            for r in range(n - 1, l, -1):
                if height[r] >= height[l]:
                    max_a = max(max_a, (r - l) * height[l])
                    break

        # <- 以右柱为基准，找距离右柱最远的且高度大于等于右柱的左柱
        for r in range(n - 1, 0, -1):
            for l in range(r):
                if height[l] >= height[r]:
                    max_a = max(max_a, (r - l) * height[r])
                    break

        return max_a
