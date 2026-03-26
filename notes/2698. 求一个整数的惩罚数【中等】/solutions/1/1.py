class Solution:
    def punishmentNumber(self, n: int) -> int:
        def can_partition(s: str, idx: int, target: int) -> bool:
            if idx == len(s):
                return target == 0
            num = 0
            for i in range(idx, len(s)):
                num = num * 10 + int(s[i])
                if num > target:
                    break
                if can_partition(s, i + 1, target - num):
                    return True
            return False

        ans = 0
        for i in range(1, n + 1):
            if can_partition(str(i * i), 0, i):
                ans += i * i
        return ans
