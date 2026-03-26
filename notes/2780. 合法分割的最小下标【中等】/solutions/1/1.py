class Solution:
    def minimumIndex(self, nums: list[int]) -> int:
        from collections import Counter
        cnt = Counter(nums)
        dom, dom_cnt = cnt.most_common(1)[0]
        left_cnt = 0
        n = len(nums)
        for i in range(n - 1):
            if nums[i] == dom:
                left_cnt += 1
            left_len = i + 1
            right_len = n - left_len
            right_cnt = dom_cnt - left_cnt
            if left_cnt * 2 > left_len and right_cnt * 2 > right_len:
                return i
        return -1
