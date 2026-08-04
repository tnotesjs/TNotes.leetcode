class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        k %= n
        count = 0
        # 共有 gcd(k, n) 个环，把每个环上的元素依次放到目标位置
        start = 0
        while count < n:
            current = start
            prev = nums[start]
            while True:
                nxt = (current + k) % n
                nums[nxt], prev = prev, nums[nxt]
                current = nxt
                count += 1
                if current == start:
                    break
            start += 1
