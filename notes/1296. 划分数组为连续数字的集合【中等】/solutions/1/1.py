class Solution:
    def isPossibleDivide(self, nums: list[int], k: int) -> bool:
        if len(nums) % k != 0:
            return False
        cnt = Counter(nums)
        for start in sorted(cnt):
            c = cnt[start]
            if c > 0:
                for i in range(k):
                    if cnt[start + i] < c:
                        return False
                    cnt[start + i] -= c
        return True
