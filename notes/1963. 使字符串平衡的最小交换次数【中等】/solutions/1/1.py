class Solution:
    def minSwaps(self, s: str) -> int:
        open_count = 0
        max_close = 0
        for ch in s:
            if ch == '[':
                open_count += 1
            else:
                open_count -= 1
            max_close = max(max_close, -open_count)
        return (max_close + 1) // 2
